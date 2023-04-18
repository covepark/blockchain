//SPDX-License-Identifier : MIT
pragma solidity >=0.8.0 <0.9.0;

contract Mapping{

    //ERC-20 잔액 관리
    mapping(address => uint) public balance;
    //key - value 형태
    //key 값이 중복이 발생하지 않음

    function updatedata1() public {
    balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38] = 1000;
    }

    function updatedata2() public {
    balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38] = 100;
    }

    function updatedata3() public {
    balance[0x7be324662afaa489a18fa26813610114b76375ae] = 50;
    }


    uint public myBalance = balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38]; //1000, 100
    uint public myBalance1 = balance[0x7be324662afaa489a18fa26813610114b76375ae]; //50

    //balance[0x851c312F78D02d53CCd036a37858AF1f6AE07c38] = 1000;


}