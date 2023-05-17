//SPDX-License-Identifier : MIT
pragma solidity >=0.8.0 <0.9.0;

contract Mapping{

    //ERC-20 잔액 관리
    mapping(address => uint) public balance;
    //key - value 형태
    //key 값이 중복이 발생하지 않음

    balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38] = 1000; //You need to define a function in which you can add the item to the struct. It is not possible to do so outside of a function.
    uint public myBalance = balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38]; //1000

    balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38] = 100;
    uint public myBalance = balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38]; //100

    balance[0x7be324662afaa489a18fa26813610114b76375ae] = 50;
    uint public myBalance1 = balance[0x7be324662afaa489a18fa26813610114b76375ae]; //50


}