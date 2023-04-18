//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract BlockProperty{

    function generateRandom() public view returns(uint8){
        uint8 number = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%251);
        //keccak256 값에는 string값이 아니라byte값이 필요하여 abi.encodePacked를 써서 변형.
        //보편적으로 timestamp와 difficulty를 많이 씀.
        return number;
    }
    
}