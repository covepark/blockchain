//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Assert{

    mapping (address => uint256) public orderList;
    
    function order() external payable {
        assert(msg.value !=0); //에러구문을 쓰지 않고 단순히 에러만 체크할 때 사용
        //Error를 발생시키고 Transcaction으로 인해 지금까지 변경된 state를 rollback
        orderList[msg.sender] = msg.value;

    }
    
}