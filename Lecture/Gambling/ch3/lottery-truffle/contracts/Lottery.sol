// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Lottery {
    address public owner;
    address payable[] public players;
    uint256 public lotteryId;
    mapping(uint256 => address) public lotteryHistory;

    constructor() {
        owner = msg.sender; //컨트랙트를 배포하는 account가 owner가 된다.
    }

    function getBalance() public view returns (uint256) { //contract가 몇개의 ETH를 들고 있는가?
        return address(this).balance;
    }

    function getPlayers() public view returns (address payable[] memory) { //모든 player의 주소 return
        return players;
    }

    function enter() public payable { //payable 타입이 아니면 ETH를 받을 수 없음 
        require(msg.value >= .01 ether, "msg.value should be greater than or equal to 0.01 ether");
        players.push(payable(msg.sender));
    }

    function getRandomNumber() public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(owner, block.timestamp))); //owner와 block.timestamp 각각을 bytes로 converting한 값을 concat(이어붙임)한 값 -> 이를 keccak256으로 해시 -> 이를 uint256으로 convert
    }

    function getRandomNumberV2() public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function getRandomNumberV3() public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp)));
    }

    function pickWinner() public onlyOwner {
        uint256 index = getRandomNumberV3() % players.length;

        lotteryHistory[lotteryId] = players[index];
        lotteryId++;

        address payable winner = players[index];
        players = new address payable[](0);

        (bool success, ) = winner.call{value: address(this).balance}("");
        require(success, "Failed to send Ether");
    }

    modifier onlyOwner {
        require(msg.sender == owner, "you're not owner");
        _;
    }
}