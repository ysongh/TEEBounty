// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bounty {
    struct BountyInfo {
        uint id;
        string title;
        uint reward;
        string testHash;
        address creator; 
        bool active;
        address winner;
    }

    BountyInfo[] public bounties;
    mapping(address => uint) public rewards;
    bytes public trustedTEEPubKey;

    event BountyCreated(uint id, string title, uint reward);
    event BountyClaimed(uint id, address winner, uint reward);
    event ResultSubmitted(uint bountyId, address submitter, string result);

    constructor(bytes memory _teePubKey) {
        trustedTEEPubKey = _teePubKey;
    }

    // Create a new bounty
    function createBounty(string memory _title, string memory _testHash) external payable {
        require(msg.value > 0, "Reward must be greater than 0");
        uint bountyId = bounties.length;
        bounties.push(BountyInfo({
            id: bountyId,
            title: _title,
            reward: msg.value,
            testHash: _testHash,
            creator: msg.sender,
            active: true,
            winner: address(0)
        }));
        emit BountyCreated(bountyId, _title, msg.value);
    }

    function submitResult(uint _bountyId, string memory _result, bytes memory _signature) external {
        require(_bountyId < bounties.length, "Invalid bounty ID");
        BountyInfo storage bounty = bounties[_bountyId];
        require(bounty.active, "Bounty is not active");
        require(bounty.winner == address(0), "Bounty already claimed");

        require(verifySignature(_result, _signature), "Invalid TEE signature");

        if (keccak256(abi.encodePacked(_result)) == keccak256(abi.encodePacked("pass"))) {
            bounty.active = false;
            bounty.winner = msg.sender;
            rewards[msg.sender] += bounty.reward;
            emit BountyClaimed(_bountyId, msg.sender, bounty.reward);
        }

        emit ResultSubmitted(_bountyId, msg.sender, _result);
    }

    function claimReward() external {
        uint amount = rewards[msg.sender];
        require(amount > 0, "No rewards to claim");
        rewards[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }

    function getBounties() external view returns (BountyInfo[] memory) {
        return bounties;
    }

    function getBounty(uint _bountyId) external view returns (BountyInfo memory) {
        require(_bountyId < bounties.length, "Invalid bounty ID");
        return bounties[_bountyId];
    }

    function verifySignature(string memory _result, bytes memory _signature) internal view returns (bool) {
        bytes32 hash = keccak256(abi.encodePacked(_result));
        return recoverSigner(hash, _signature) == address(uint160(uint256(keccak256(trustedTEEPubKey))));
    }

    function recoverSigner(bytes32 _hash, bytes memory _signature) internal pure returns (address) {
        return address(0);
    }

    receive() external payable {}
}