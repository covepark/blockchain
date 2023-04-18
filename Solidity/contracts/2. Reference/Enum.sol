//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Enum{
    
    enum Status{ 
        NotSale,
        Auction,
        Sales,
        Bid,
        Sold
    } //변수가 들어가는 것이 아니라 실제로 사용될 string data값이 들어감

    Status public auctionStatus;

    function auctionStart() public {
        auctionStatus = Status.Auction;
    }

    function bid() public {
        auctionStatus = Status.Bid;
    }

    function sold() public {
        auctionStatus = Status.Sold;
    }

}