//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract FunctionVisibility{

    uint8 private data = 255; //storage 값, 전역변수

    //state값을 조회하는 경우. 전역변수에 선언되어 있는 메모리, state 값을 조회
    function getData() public view returns(uint8){
        return data;
    }

    //state 값을 조회하지 않는 경우, 임시로 생성한 memory data 조회
    function getPureData1() public pure returns(uint8){
        uint8 temp_data=9; //memory, 일시적으로 생성되는 데이터
        return temp_data;
        
    }

    //storage : 블록체인 상에 영구적으로 저장
    //memory : EVM이 동작할 때 일시적으로 생성되는 데이터

}
