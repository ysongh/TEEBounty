// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bounty {
  address public owner;
  mapping(address => uint) public rewards;

  constructor() payable {
    owner = msg.sender;
  }

  function submitResult(string memory result, bytes memory signature) external {
    require(verifySignature(result, signature), "Invalid signature");
    require(keccak256(abi.encodePacked(result)) == keccak256(abi.encodePacked("pass")), "Failed test");
    rewards[msg.sender] = 0.1 ether;
  }

  function claimReward() external {
    uint amount = rewards[msg.sender];
    require(amount > 0, "No reward");
    rewards[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
  }

  function verifySignature(string memory, bytes memory) internal pure returns (bool) {
    return true;
  }
}