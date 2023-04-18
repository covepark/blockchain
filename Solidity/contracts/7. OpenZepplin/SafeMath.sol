//SPDX-License-Identifier : <SPDX-License>
pragma solidity >=0.8.0 <0.9.0;

import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/solidity/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

//library: state값은 존재하지 않고 단순히 연산만 진행할 때, memory 기반의 transaction들을 처리해 주는 function이 모인 컨트랙트에 사용.
//0.8.0버전 부터는 자동으로 overflow, underflow 문제가 처리 됨. unchecked는 overflow, underflow를 자동으로 처리하지 않고 실제로 처리되는지 확인하기 위해 사용.
contract Math{

    using SafeMath for uint256; //SafeMath를 쓸때, 타입 지정.
    uint public a = 5;
    uint public b = 5;
    uint public c = 7;
    uint public d = 0;

    function add() public view returns(uint) {
        return a.add(b); //기존에는 a+b를 사용하나, safemath를 사용하므로 a.add(b)를 사용.
    }

    function sub() public view returns(uint) {
        return a.sub(b); //a-b
    }

    function sub2() public view returns(uint) { //underflow로 error 발생
        return a.sub(c); //a-c
    }

    function mul() public view returns(uint) {
        return a.mul(b); //a*b
    }

    function div() public view returns(uint) { //0으로 나누는 것은 불가하여 error 발생
        return a.div(d); //a/d
    }

}