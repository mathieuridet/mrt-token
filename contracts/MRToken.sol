// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MRToken is ERC20 {
    uint256 private constant FIXED_SUPPLY = 1000 * 10 ** 18; // 1000 MRT with 18 decimals

	constructor() ERC20("MRToken", "MRT") {
        _mint(msg.sender, FIXED_SUPPLY);
    }
}