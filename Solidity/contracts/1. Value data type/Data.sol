//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataType{

    bool public data1 = true; //true, false

    int public data2 = 0; // +, - , 0
    uint public data3 = 10; // only natrual number

    uint256 public data4 = 10000000000000000000; // verg large number 0~2^256-1
    int256 public data5 = -10000000000000000000 ; // -2^255 ~ 2^255 -1

    uint8 public data6 = 100; // 0~2^8-1 = 0 ~ 255
    int8 public data7 = -100; // -2^7 ~ 2^7 -1 = -128 ~ 127

    string public data8 = "fastcampus"; //save as byte type
    bytes public data9 = "fastcampus"; //variable memory form. 가변적인 메모리 형태일 시 byte 주로 사용.
    bytes20 public data10 = hex"6d2e03b7effeae98bd302a9f836d0d6ab0002766"; // address
    bytes32 public data11 = hex"6d2e03b7effeae98bd302a9f836d0d6ab0002766"; //hash value

    //float public data12 = 0.1; decimal X

    address public data12 = 0x851c312F78D02d53CCd036a37858AF1f6AE07c38;

}
