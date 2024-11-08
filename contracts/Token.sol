// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// ISP Token Contract
contract ISPToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("ISP Token", "ISP") {
        _mint(msg.sender, initialSupply);
    }
}
