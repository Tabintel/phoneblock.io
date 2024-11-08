// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Token.sol";

///DePINService - Decentralized Internet Service Provider
contract DePINService is Ownable {
    // Token instance
    PBTToken public pbtToken;

    // Node and User Structures
    struct Node {
        address provider;
        uint256 pricePerUse;
        bool isActive;
    }

    struct User {
        uint256 lastUsedNodeId;
        uint256 subscriptionEndTime;
        uint256 rewardPoints;
    }

    // State variables
    mapping(uint256 => Node) public nodes;
    mapping(address => User) public users;
    mapping(address => uint256) public providerRewards;

    uint256 public nodeCount;

    // Events
    event NodeRegistered(uint256 nodeId, address provider, uint256 pricePerUse);
    event NodeUsage(address user, uint256 nodeId, uint256 endTime);
    event ProviderReward(address provider, uint256 amount);
    event UserReward(address user, uint256 amount);

    ///pbtToken Address of the deployed PBTToken contract
    constructor(address _pbtToken) {
        pbtToken = PBTToken(_pbtToken);
    }

    ///Register a new node with a specified price per usage period
    function registerNode(uint256 pricePerUse) external {
        require(pricePerUse > 0, "Price must be greater than zero");

        nodeCount++;
        nodes[nodeCount] = Node({
            provider: msg.sender,
            pricePerUse: pricePerUse,
            isActive: true
        });

        emit NodeRegistered(nodeCount, msg.sender, pricePerUse);
    }

    ///User subscribes to a node by paying the required PBT tokens
    function useNode(uint256 nodeId) external {
        Node storage node = nodes[nodeId];
        require(node.isActive, "Node is not active");
        
        uint256 price = node.pricePerUse;
        require(pbtToken.balanceOf(msg.sender) >= price, "Insufficient balance to use node");

        // Transfer PBT token from user to contract as payment
        pbtToken.transferFrom(msg.sender, address(this), price);

        // Update user's usage
        uint256 usageDuration = 1 hours; // Fixed usage duration for simplicity
        users[msg.sender].lastUsedNodeId = nodeId;
        users[msg.sender].subscriptionEndTime = block.timestamp + usageDuration;
        users[msg.sender].rewardPoints += 10; // Reward points for using node

        // Update provider's rewards
        providerRewards[node.provider] += price;
        
        emit NodeUsage(msg.sender, nodeId, users[msg.sender].subscriptionEndTime);
    }

    ///Distribute rewards to providers based on the rent collected
    function distributeProviderRewards() external {
        for (uint256 i = 1; i <= nodeCount; i++) {
            Node storage node = nodes[i];
            uint256 reward = providerRewards[node.provider];
            
            if (reward > 0) {
                pbtToken.mint(node.provider, reward); // Mint new PBT tokens as rewards
                providerRewards[node.provider] = 0;
                emit ProviderReward(node.provider, reward);
            }
        }
    }

    ///Claim user rewards based on accumulated reward points
    function claimUserRewards() external {
        User storage user = users[msg.sender];
        require(user.rewardPoints > 0, "No rewards available");

        uint256 rewardAmount = user.rewardPoints * 1e18; // 1 PBT per reward point
        pbtToken.mint(msg.sender, rewardAmount);
        
        emit UserReward(msg.sender, rewardAmount);
        
        // Reset user reward points after claiming
        user.rewardPoints = 0;
    }

    /// Provider can deactivate a node they own
    function deactivateNode(uint256 nodeId) external {
        require(nodes[nodeId].provider == msg.sender, "Only the provider can deactivate this node");
        nodes[nodeId].isActive = false;
    }
}
