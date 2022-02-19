const VotationContract = artifacts.require("VotationContract");
const VoteContract = artifacts.require("VoteContract");

module.exports = function (deployer) {
  deployer.deploy(VotationContract, 2);
  deployer.deploy(VoteContract);
};
