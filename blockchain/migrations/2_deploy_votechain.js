const VotationContract = artifacts.require("VotationContract");
const VoteContract = artifacts.require("VoteContract");

module.exports = function (deployer) {
  deployer.deploy(VotationContract, 100);
  deployer.deploy(VoteContract);
};
