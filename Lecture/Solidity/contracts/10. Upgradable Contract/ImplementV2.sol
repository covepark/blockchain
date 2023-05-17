//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ImpleV2{
    address public implementation;
    uint public x; //Proxy Contract와 사용되는 Contract의 state값이 순서대로 동일하게 작성되어야함.

    //ImpleV2 컨트랙트를 업데이트하면서 변수가 추가되면 어떡함? Proxy에 추가할 수는 없음.

    function inc() external{
        x += 1;
    }

    function dex() external{
        x -= 1;
    }
}
