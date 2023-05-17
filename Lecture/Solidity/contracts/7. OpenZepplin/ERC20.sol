//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "/Users/covepark/Library/CloudStorage/GoogleDrive-nunmunum@gmail.com/My Drive/git/solidity/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FCToken is ERC20{

    constructor(string memory name, string memory symbol) ERC20(name, symbol){
        _mint(msg.sender, 100000 * (10**18));
    }
}

