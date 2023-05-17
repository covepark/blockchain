//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Open Zepplin libraries for controlling upgradability and access.
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract ProxyContractV1 is Initializable, UUPSUpgradeable, OwnableUpgradeable { //Initializable : constructor를 이용하게 되면 proxy구현에서 초기값 세팅을 바꿀 수 없음. 따라서 initalize를 함수로 구현함.
    uint256 public count;

    function initialize() public initializer {
        count = 10;
        __Ownable_init();
    }

    function _authorizeUpgrade(address) internal override onlyOwner {} //관리자만 Proxy 설정을 할 수 있도록 구현.

    function inc() external {
        count++;
    }
    
}

contract ProxyContractV2 is ProxyContractV1 {

    function dex() external {
        count--;
    }
}