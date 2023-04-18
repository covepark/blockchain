// SPDX-License-Identifier : MIT //GPL 3.0

pragma solidity ^0.8.0; //upward possible. @antoher example: >=0.8.0 <0.9.0;

contract Solidity {
    // a -> Fun() -> b = 15
    // 10 -> Fun() -> 15
    uint8 public a = 10;

    function changeData() public {
        a = 15;
    }

}