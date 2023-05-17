//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

error ZeroCheckError(); //contract 안/밖 상관 없음

contract Require{

    mapping(address => uint) public orderList;
    uint256 public minimumprice = 1000;

    function order() external payable{
        if(msg.value < minimumprice){
            revert ZeroCheckError(); //error 발생, state 롤백
        }else{
            orderList[msg.sender] = msg.value;
        }
    }
}