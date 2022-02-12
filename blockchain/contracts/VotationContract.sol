// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract VotationContract {

  uint  votesLimit ;
  uint  votesCounter = 0;

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
    registeredVoters[votesCounter] = Voter( _documentId, block.timestamp,msg.sender);
    votesCounter++;
  }
}