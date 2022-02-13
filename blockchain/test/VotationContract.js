const VotationContract = artifacts.require("VotationContract");

contract("Votation Contract", () => {
  before(async () => {
    this.votationContract = await VotationContract.deployed();
  });

  it("Migrate deployed successfully", async () => {
    const address = await this.votationContract.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("Register voter", async () => {
    await this.votationContract.registerVoter(1);
    const votersCounter = await this.votationContract.votersCounter();
    await this.votationContract.registerVoter(2);
    const votersCounter2 = await this.votationContract.votersCounter();

    assert.equal(votersCounter, 1);
    assert.equal(votersCounter2, 2);
  });
});
