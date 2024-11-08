// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// PBTToken - Reward token for DePIN Internet Service Provider
contract PBTToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Provider Bonus Token", "PBT") {
        _mint(msg.sender, initialSupply);
    }

    /// Mint additional tokens for rewards (restricted to owner)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
