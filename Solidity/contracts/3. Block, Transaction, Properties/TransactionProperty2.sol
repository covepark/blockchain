//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract transactionProperty2{

    mapping(address => uint) private orderList;

    function newOrderList() external payable{
        orderList[msg.sender] = msg.value; //사용자의 주문정보 관리 가능
    }

    bytes4 private checkFunction;

    function newCheckFunction(address sender, uint price) external pure returns(bool){ //storage에 접근권한이 없는 pure사용.(접근할 필요가 없으므로.)
        bytes4 selector = bytes4(keccak256("newOrderList()")); //사용자가 요청한 함수 자체를 해시를하고 그것을 바이트값으로 변환하는 것이 input data임.

        if(selector == msg.sig){ //함수를 호출한 값을 바이트 코드로 바꾼 값이 msg.sig임.
            return true;
        }else{
            return false;
        }
    }
}