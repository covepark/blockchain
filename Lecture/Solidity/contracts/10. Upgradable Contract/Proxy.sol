//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Proxy{

    address public implementation;
    uint public x = 0; //Proxy Contract와 사용되는 Contract의 state값이 순서대로 동일하게 작성되어야함.



    function setImplementation(address implementation_) external { //Proxy contract와 통신을 할 컨트랙트 설정 function.
        implementation = implementation_;
    }

    function _delegate(address implementation_) internal { //ca주소의 contract를 가져와서 실행함. 
        //Assembly를 통해서 Low-Level언어로 접근이 가능하고, 메모리나 스토리지에 직접적으로 접근이 가능한 방법을 말합니다.
        //Solidity에서 EVM의 low level 연산을 수행할 수 있도록 도와줌.
        assembly{ 
            //calldatasize의 값(size, not data)를 할당해주는 코드
            calldatacopy(0,0, calldatasize()) //요청받은 정보를 그대로 복사

            //기존에는 to.delegatecall과 같이 특정 주소에서 실행을 했었는데, 이번에는 assembly로 실제 opcode값을 그대로 전송.
            //실질적으로 다른 컨트랙트를 호출하는 delegatecall을 호출
            //gas : 말그대로 사용되는 gas양 입니다.
            //_impl : 코드를 보면 알수 있듯이 A 컨트랙트를 가르키게 됩니다.
            //ptr : 보낼 데이터의 메모리 주소 입니다
            //calldatasize : 데이터의 크기 입니다.
            //0 : 해당 값의 return값 입니다.
            let result := delegatecall(gas(),implementation_,0,calldatasize(),0,0) //상대방 주소로 delegatecall을 보냄, 요청받은 정보를 그대로 delegatecall값으로 보냄.

            //이후 Return데이터를 받고 해당 데이터를 검증함으로써 마무리가 됩니다.
            returndatacopy(0,0, returndatasize()) //정보 복사
            switch result
            case 0 { //결과가 0이면 revert
                revert(0,returndatasize())
            }
            default{
                return(0,returndatasize())
            }
        }
    }

    //Contract에 없는 함수를 실행시키면 어떻게 처리할지에 대한 구문을 적는 구간.
    fallback() external payable{ //사용자가 실행하는 함수는 Proxy.sol에는 없으므로, fallback을 실행하도록하고 fallback이 delegate를 호출하도록 유도.
        _delegate(implementation);
    }

    receive() external payable{
        revert();
    }

}