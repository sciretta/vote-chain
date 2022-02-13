// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract VoteContract is ERC721 {
 
  constructor () ERC721("Vote", "VOTE") {

  }

  function createRedVote (address _address) public {
      
  }
  
}