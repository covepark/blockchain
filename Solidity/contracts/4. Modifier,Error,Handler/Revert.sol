//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Revert{

    uint public minPrice = 1000;
    function order() external payable{
        if(msg.value < minPrice){
            revert("Msg.value must not be zero."); //error 발생, state 롤백
        }
    }
}