//SPDX-License-Identifier: MIT //GPL 3.0
pragma solidity >=0.8.0 <0.9.0;

contract Function {

    uint8 private data = 255;

    function setData(uint8 _data) public {
        data = _data; //트랜잭션 실행으로 메타마스크 호출 됨.
    }
¡
    function getData() public view returns(uint8){
        return data; //트랜잭션 조회로 메타마스크 호출 되지 않음.
    }

}