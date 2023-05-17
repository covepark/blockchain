// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e); //외부 데이터와 통신할 컨트랙트
    }

    function getDecimals() external view returns (uint8){
        uint8 dec = priceFeed.decimals();
        return dec;
    }

    function getDescription() external view returns (string memory){
        string memory des = priceFeed.description();
        return des;
    }

    function getlatestPrice() public view returns (int){
        (
            /*uint80 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp/,
            /*uint80 answeredInRound*/,
        ) = priceFeed.latestRoundData(); //priceFeed의 컨트랙트로가서 latestRoundData에 실제 저장되어있는 price를 가져옴. 조회만 하기 때문에 따로 트랜잭션 수수료가 나가지 않음.
        return price;
    }


}