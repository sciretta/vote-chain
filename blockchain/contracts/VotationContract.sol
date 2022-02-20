// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./VoteContract.sol";

contract VotationContract is VoteContract {
  enum Party{ RED, BLUE }
  uint public votesLimit ;
  uint public endDate;
  uint public votersCounter = 0;
  uint public redVotes = 0;
  uint public blueVotes = 0;

  constructor(uint _votesLimit, uint _endDate) {
    votesLimit = _votesLimit;
    endDate = _endDate;
  }

  struct Voter {
    uint createdAt;
    address voterAddres;
    bool vote;
  }

  mapping (uint => Voter) public registeredVoters;

  modifier validateTime{
    require(block.timestamp <= endDate, "Votation has closed" );
    _;
  }

  function registerVoter(uint _documentId) public validateTime{
    require(votersCounter < votesLimit, "Votes limit reached");
    registeredVoters[_documentId] = Voter(block.timestamp,msg.sender, false);
    votersCounter++;
  }

  function vote(uint _documentId, Party _party) public validateTime{
    require(registeredVoters[_documentId].voterAddres == msg.sender, "This document is not registered");
    require(registeredVoters[_documentId].vote == false, "This document has already voted");

    if(_party == Party.BLUE){
      blueVotes++;
      mintVote(_documentId);
      registeredVoters[_documentId].vote = true;
    } else if(_party == Party.RED){
      redVotes++;
      mintVote(_documentId);
      registeredVoters[_documentId].vote = true;
    }
  }
}