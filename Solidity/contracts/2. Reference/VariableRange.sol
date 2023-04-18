//SPDX-License-Identifier : MIT
pragma solidity >=0.8.0 <0.9.0;

contract VariableRange{

    uint private data = 10; //전역변수로 선언한 데이터는 storage에 저장

    function getData() public view returns(uint){ //function 내부에 생성한 data는 날아가는 데이터기 때문에 조회가 되지 않는다.
        return data;
    }

    function getData2() public pure returns(uint){ //function 내부에 생성한 data는 날아가는 데이터기 때문에 조회가 되지 않는다. view도 가능.
        uint data = 5;
        return data; //지역변수의 값을 호출함, 변수명이 중복이 될때는 memory 데이터를 호출함.
    }


}
