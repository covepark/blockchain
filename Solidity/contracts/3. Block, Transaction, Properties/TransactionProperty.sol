//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract transactionProperty{

    uint public msg1 = gasleft();
    bytes public msg2 = msg.data; //input data 값
    address public msg3 = msg.sender; //메세지 보낸 사람 주소
    bytes4 public msg4 = msg.sig; //함수를 호출한 값을 바이트 코드로 바꾼 값
    uint public msg5 = msg.value; //사용자가 전송한 이더

    function checkValue() external payable {
        uint value = msg.value; //sender의 경우에는 에러가 발생하지 않으나 value를 호출할때는 payable 키워드가 있어야함.
    }
}


