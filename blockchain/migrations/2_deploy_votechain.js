const VotationContract = artifacts.require("VotationContract");

module.exports = function (deployer) {
  deployer.deploy(VotationContract, 100);
};
