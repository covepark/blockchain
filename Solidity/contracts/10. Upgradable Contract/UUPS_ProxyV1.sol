//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Open Zepplin libraries for controlling upgradability and access.
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/Solidity/node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract ProxyContractV1 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 public count;

    function initialize() public initializer { //원래 constructor에서 처리를 했어야 했던 것을 여기서 체크를 해줌.
        count = 10;
        __Ownable_init();
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function inc() external {
        count++;
    }
    
}

//배포 시 자동으로 Proxy로 인식 함.