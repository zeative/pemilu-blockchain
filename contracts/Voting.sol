// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    address public admin;
    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    constructor() {
        admin = msg.sender;
    }

    function addCandidate(string calldata name) external {
        require(msg.sender == admin, "Only admin can add");
        candidates.push(Candidate(name, 0));
    }

    function vote(uint index) external {
        require(!hasVoted[msg.sender], "You already voted");
        require(index < candidates.length, "Invalid candidate");

        hasVoted[msg.sender] = true;
        candidates[index].voteCount++;
    }

    function getCandidates() external view returns (Candidate[] memory) {
        return candidates;
    }
}
