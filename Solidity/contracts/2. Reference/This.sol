//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract This{ //this: 이 컨트랙트를 지칭한다.

    uint public data = 10;

    function getBalance() public view returns(uint){
        return address(this).balance; //이 컨트랙트의 잔액조회
        //address(this).transfer;
    }

    function externalFunction() external { //외부에서만 호출 가능
        data = 15;
    }

    function internalFunction() internal { //내부에서만 호출 가능
        externalFunction(); //외부에서만 호출 가능한 function으로 호출 실패
    }

    function internalFunction() internal { //내부에서만 호출 가능
        this.externalFunction(); //this사용 시 내부에서도 이 함수를 호출하여 사용 가능, this는 컨트랙트 내에서 함수 호출 및 잔액 조회
    }

}