//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Require{

    mapping(address => uint) public orderList;

    function order() external payable{
        require(msg.value != 0, "Msg.value must not be zero.");
        //Error를 발생시키고 Transcaction으로 인해 지금까지 변경된 state를 rollback

        orderList[msg.sender] = msg.value;
    }

    function order2() external payable{

        if(msg.value != 0){
            orderList[msg.sender] = msg.value;   
        }else{
            revert("Msg.value must not be zero.");
        }
    }

}