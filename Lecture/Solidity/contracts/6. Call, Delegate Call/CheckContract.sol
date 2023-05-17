//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract CheckContract{

    function isContract(address _addr) private view returns (bool isContract_){ //전송 전에 contract인지 아닌지 체크하는 함수

        uint32 size;
        assembly{ //inline assembly, EVM에서 사용하는 코드를 그대로 사용할 수 있도록 지원.
            size := extcodesize(_addr) //해당 주소의 code state정보의 size정보를 가져옴
        }
        return (size > 0); //CA, EOA. 사이즈가 0보다 크면 CA
    }
    
}