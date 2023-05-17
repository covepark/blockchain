//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Car{

    string private type_;
    uint8 private door;

    function getDoor() public view returns(uint8){
        return door;
    }

}

contract Benz is Car{ //Car 상속 시 Car contract의 getDoor 함수 사용 가능

    string private model; //함수 외부의 상태 변수는 storage가 기본값이다.
    address private owner;

    //솔리디티에 기본적인 데이터 타입 uint, bool, string 중 string에서만 memory 옵션 태그가 강제되는 건 문자열 데이터 타입이 uint, bool 타입에 비해 상대적으로 무겁기 때문이다.
    //이러한 이유로 이어서 살펴볼 바이트(bytes) 역시 memory 옵션이 붙는다.
    function getModel() public view returns(string memory){ //storage와 memory 키워드는 구조체와 배열을 선언할 때 명시적으로 선언되어야 합니다.
        return model;
    }

}

contract Audi is Car{ //Car 상속 시 Car contract의 getDoor 함수 사용 가능
    string private model;
    address private owner;

    function getModel() public view returns(string memory){
        return model;
    }


}