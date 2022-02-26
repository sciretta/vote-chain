// import TruffleContract from "@truffle/contract";

export class Blockchain {
  // web3provider;
  // contracts: {
  //   votationContract: any;
  // } = {
  //   votationContract: {},
  // };
  // sentencesContract: any;
  // account: any;
  // votationContract: any;
  // constructor() {
  //   // @ts-ignore
  //   if (!window.ethereum) {
  //     console.log("no ethereum in this browser");
  //     return;
  //   } else {
  //     // @ts-ignore
  //     this.web3provider = window.ethereum;
  //     this.loadAccount();
  //     this.loadContracts();
  //     console.log("inicializado");
  //   }
  // }
  // async loadContracts() {
  //   const votationContractJSON = await fetch(
  //     "http://localhost:400/VotationContract.json"
  //   ).then((res) => res.json());
  //   // @ts-ignore
  //   this.contracts.votationContract = TruffleContract(votationContractJSON);
  //   this.contracts.votationContract.setProvider(this.web3provider);
  //   this.votationContract = await this.contracts.votationContract.deployed();
  // }
  // async loadAccount() {
  //   // @ts-ignore
  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   this.account = accounts[0];
  // }
  // async createSentence(_text:, _author) {
  //   const result = await this.sentencesContract.createSentence(_text, _author, {
  //     from: this.account,
  //   });
  //   console.log(result.logs[0].args);
  // }
}
