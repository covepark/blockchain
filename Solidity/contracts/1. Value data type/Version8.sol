//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract FunctionV8{

    uint8 private data = 255;

    function setData() public {
        data += 1;
    }

    function getdata() public view returns(uint8){
        return data;   
    }

}