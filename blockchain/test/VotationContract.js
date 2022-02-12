const VotationContract = artifacts.require("VotationContract");

contract("Votation Contract", () => {
  before(async () => {
    this.votationContract = await VotationContract.deployed();
  });

  it("migrate deployed successfully", async () => {
    const address = await this.votationContract.address;

    const votesLimits = await this.votationContract.votesLimit;

    console.log({ votesLimits, address });

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });
});
