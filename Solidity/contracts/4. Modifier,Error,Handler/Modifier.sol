//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Modifier{

    modifier checkMinPrice(){
        require(msg.value > minPrice);
        _; //_;은 조건을 체크를 한 후 다음 코드를 실행시키겠다는 의미.
    }

    uint public minPrice = 10000;
    mapping (address => uint256) public orderList;

    function test1() public payable{
        require(msg.value > minPrice);
        orderList[msg.sender] = msg.value;
    }

    function test2() public payable checkMinPrice{
        orderList[msg.sender] = msg.value;
    }

}