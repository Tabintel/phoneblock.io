// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ISPService {

    // Define the ISP Token contract
    IERC20 public ispToken;

    // Node struct to store node information
    struct Node {
        address nodeAddress;
        uint256 bandwidth; // in Mbps
        uint256 pricePerHour; // in ISP tokens
        bool isActive;
    }

    // User struct to store subscription details
    struct User {
        uint256 subscribedNodeId;
        uint256 subscriptionEndTime;
    }

    // State variables
    mapping(uint256 => Node) public nodes;
    mapping(address => User) public users;

    uint256 public nodeCount;
    address public owner;

    // Events for logging
    event NodeRegistered(uint256 nodeId, address nodeAddress, uint256 bandwidth, uint256 pricePerHour);
    event UserSubscribed(address user, uint256 nodeId, uint256 subscriptionEndTime);
    event UserUnsubscribed(address user);
    event RewardDistributed(uint256 nodeId, uint256 amount);

    constructor(address _ispToken) {
        ispToken = IERC20(_ispToken);
        owner = msg.sender;
    }

    // Modifier to restrict functions to only the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this");
        _;
    }

    // Register a new ISP node
    function registerNode(uint256 bandwidth, uint256 pricePerHour) external onlyOwner {
        nodeCount++;
        nodes[nodeCount] = Node({
            nodeAddress: msg.sender,
            bandwidth: bandwidth,
            pricePerHour: pricePerHour,
            isActive: true
        });
        
        emit NodeRegistered(nodeCount, msg.sender, bandwidth, pricePerHour);
    }

    // Subscribe a user to a node
    function subscribeToNode(uint256 nodeId) external {
        require(nodeId > 0 && nodeId <= nodeCount, "Invalid node ID");
        require(nodes[nodeId].isActive, "Node is not active");

        uint256 price = nodes[nodeId].pricePerHour;
        ispToken.transferFrom(msg.sender, address(this), price);

        uint256 subscriptionDuration = 1 hours;
        users[msg.sender] = User({
            subscribedNodeId: nodeId,
            subscriptionEndTime: block.timestamp + subscriptionDuration
        });

        emit UserSubscribed(msg.sender, nodeId, block.timestamp + subscriptionDuration);
    }

    // Unsubscribe the user
    function cancelSubscription() external {
        User storage user = users[msg.sender];
        require(user.subscribedNodeId > 0, "You are not subscribed to any node");

        delete users[msg.sender];

        emit UserUnsubscribed(msg.sender);
    }

    // Distribute rewards to nodes based on user subscriptions
    function rewardNodes() external onlyOwner {
        for (uint256 i = 1; i <= nodeCount; i++) {
            Node storage node = nodes[i];
            uint256 rewardAmount = 0;

            // Check how many users are subscribed to the node
            for (uint256 j = 0; j < 10; j++) {
                if (users[msg.sender].subscribedNodeId == i) {
                    rewardAmount += node.pricePerHour;
                }
            }

            // Transfer rewards to the node (this is simplified; ideally, you would track users more efficiently)
            if (rewardAmount > 0) {
                ispToken.transfer(node.nodeAddress, rewardAmount);
                emit RewardDistributed(i, rewardAmount);
            }
        }
    }
}
