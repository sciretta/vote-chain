// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./VoteContract.sol";

contract VotationContract is VoteContract {

  uint public votesLimit ;
  uint public votersCounter = 0;
  uint public redVotes = 0;
  uint public blueVotes = 0;

  constructor(uint _votesLimit) {
      votesLimit = _votesLimit;
   }

   struct Voter {
       uint documentId; 
       uint createdAt;
       address voterAddres;
   }

  mapping (uint => Voter) public registeredVoters;

  function registerVoter(uint _documentId) public {
    registeredVoters[votersCounter] = Voter( _documentId, block.timestamp,msg.sender);
    votersCounter++;
  }
}