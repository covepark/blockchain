//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract BlockProperty{

    uint public block1 = block.basefee; //기본 수수료
    uint public block2 = block.chainid; //chain id 정보
    address payable public block3 = block.coinbase; //채굴자 정보
    uint public block4 = block.difficulty; //난이도
    uint public block5 = block.gaslimit; //가스한도
    uint public block6 = block.number; //블록 넘버 수
    uint public block7 = block.timestamp; //타임스탬프
    
}