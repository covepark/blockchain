//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract IfElse{


    uint public minimalPrice = 1000;
    uint public maxPrice = 1000000;
    mapping (int => address) public owner;

    function conditional(uint ask_price) public {
        if(ask_price > minimalPrice){
            owner[1] = 0x851c312F78D02d53CCd036a37858AF1f6AE07c38;
        }else {
            revert(); //fail 처리
        }
    }

    function conditional2(uint ask_price) public {
        if(ask_price > minimalPrice){
            owner[1] = 0x851c312F78D02d53CCd036a37858AF1f6AE07c38;
        }else if(ask_price> maxPrice){
            revert();
        }else{
            revert(); //fail 처리
        }
    }


}