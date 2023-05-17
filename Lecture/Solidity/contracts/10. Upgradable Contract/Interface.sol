//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Counter{
    uint public count;

    function getCount() external view returns(uint) {
        return count;
    }

    function inc() external{
        count += 1;
    }
}

interface ICounter{ //De-fi서비스들을 이용 시 컨트랙트에서 외부컨트랙트를 호출할 때 쓰는 것이 인터페이스, 서로 떨어져있는 컨트랙트 호출 가능.
    function getCount() external view returns(uint); //Counter의 함수를 호출할 수 있는 정보를 Interface에 동일하게 작성, parameter와 return만, 로직은 제외.
    function inc() external;
}

contract MyContract{ //실제로 Interface에 적힌 Counter 내의 함수를 호출하는 방식.
    //uint public count; delegatecall이 아닌 call을 이용하기 때문에 Counter에 있는 변수를 그대로 사용함. 따라서 unit public count르 작성할 필요 없고 Counter contract의 count값을 그대로 가져옴.
    function incrementCount(address _counter) external{ //_counter: 실제 배포된 주소값
        ICounter(_counter).inc();
    }
    
    function getCount(address _counter) external view returns(uint) {
        return ICounter(_counter).getCount();
    }
}