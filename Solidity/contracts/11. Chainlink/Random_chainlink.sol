// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract Dice is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;
    address private winner;

    uint64 s_subscriptionId = 9687; //chainlink 사이트에서 조회할 수 있는 값
    address vrfCoordinator = 0x6168499c0cFfCaCD319c818142124B7A15E857ab; //chainlink 사이트에서 조회할 수 있는 값
    bytes32 keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15; //chainlink 사이트에서 조회할 수 있는 값
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 2;

    uint256[] internal s_randomWords;
    uint256 public s_requestId;
    address s_owner;
    uint8 public answer;

    constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator){
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
    }

    function requestRandomWords() internal { //random number 요청, COORDINATOR contract에 있는 requestRandomWords함수를 호출하여 실제로 requestId값을 얻음
        
        s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }

    function fulfillRandomWords( //COORDINATOR contract가 다시 consumer contract에다가 fulfillRandomWords를 컨트랙트를 호출하여 생성된 랜덤 값들을 보내줌. 스마트 컨트랙트 내부에서 랜덤값을 생성하는게 아니라 외부의 믿을 수 있는 contract에서 생성
        uint256, /*_requestId,*/
        uint256[] memory randomWords
    ) internal override {
        s_randomWords = randomWords;
        answer = uint8(s_randomWords[0]%10);
    }    

    function makeAnswer() public onlyOwner{
        requestRandomWords();
    }

    function roll(uint dice_number) public payable{
        if(dice_number == answer) {
            winner = msg.sender;
        }
    }

    function getWinner() view public returns(address) {
        return winner;
    }

    modifier onlyOwner(){
        require(msg.sender == s_owner);
        _;
    }
   
}
