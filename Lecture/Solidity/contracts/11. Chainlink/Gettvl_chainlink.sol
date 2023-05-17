// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TvlCalculator {

    AggregatorV3Interface internal priceFeed;
    event Receive(address sender, uint value);

    constructor() {
        priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e); //외부 데이터와 통신할 컨트랙트
    }

    function getDecimals() external view returns (uint8){
        uint8 dec = priceFeed.decimals();
        return dec;
    }

    function getDescription() external view returns (string memory){
        string memory des = priceFeed.description();
        return des;
    }

    function getlatestPrice() public view returns (int){
        (
            /*uint80 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp/,
            /*uint80 answeredInRound*/,
        ) = priceFeed.latestRoundData();
        return price;
    }

    function getTvlOnContract() public view returns (uint){
        int currentprice = getlatestPrice();
        uint tvl = address(this).balance * (uint(currentprice) / (10**priceFeed.decimals())); //ETH
        //uint tvl = IERC20(_address).balanceOf("msg.sender") * (uint(currentprice) / (10**priceFeed.decimals())); //ERC-20
        return tvl;
    }

    fallback() external payable{
        emit Receive(msg.sender, msg.value);
    }

    receive() external payable{
        emit Receive(msg.sender, msg.value);
    }

}