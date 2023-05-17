//SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.5.0;

contract FunctionV4{

    uint8 private data = 255;

    function setData() public { //overflow 문제가 생김.
        data += 1;
    }

    function getdata() public view returns(uint8){
        return data;   
    }

}