//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Address{
    //address public failuser = 0x851c312f78d02d53ccd036a37858af1f6ae07c38; //checksum error occurs.
    address public user = 0x851c312F78D02d53CCd036a37858AF1f6AE07c38;
    address payable public payable_user = payable(user); //이더리움을 주고 받는 contract 주소나, EOA같은 경우 스마트컨트랙트 상에서 payable을 명시해 줘야지만 돈의 이동이 가능함.

    function sendEth() public payable{
        //user.transfer(1000000000000000000);
        payable_user.transfer(1000000000000000000); //이더 전송 함수
    
    }

    function getBalance() public view returns(uint){
        return user.balance; //1000000000000000000 잔액 조회 함수
    }



}