const VotationContract = artifacts.require("VotationContract");

contract("Votation Contract", () => {
  const votesLimit = 2;
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

    try {
      await this.votationContract.registerVoter(3);
    } catch (error) {
      assert.equal(error.reason, "Votes limit reached");
    }

    assert.equal(votersCounter, 1);
    assert.equal(votersCounter2, 2);
  });

  it("Vote", async () => {
    await this.votationContract.vote(1, 0);
    await this.votationContract.vote(2, 1);

    try {
      await this.votationContract.vote(1, 0);
    } catch (error) {
      assert.equal(error.reason, "This document has already voted");
    }

    try {
      await this.votationContract.vote(3, 1);
    } catch (error) {
      assert.equal(error.reason, "This document is not registered");
    }

    // await this.votationContract.vote(1, 1);
    const blueVotes = await this.votationContract.blueVotes();
    const redVotes = await this.votationContract.redVotes();

    assert.equal(blueVotes, 1);
    assert.equal(redVotes, 1);
  });
});
