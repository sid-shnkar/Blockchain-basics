const SHA256 = require("sha256");

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()]; //chain array
    this.pendingTransactions = []; //pending transactions are those that are yet to be added to the block
  }

  createGenesisBlock() {
    return {
      index: 1, //index of the block
      timestamp: Date.now,
      transactions: [],
      nonce: 0, //
      hash: "hash", //hash corresponds to current block hash
      previousBlockHash: "previousBlockHash", //note that genesis block is the first block in blockchain
    };
  }

  //gets the last block added to the chain
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

//to generate hash for a new block using previous block's hash and other params
  generateHash([previousBlockHash, timestamp, pendingTransactions]) {
    let hash = "";
    let nonce = 0;

    while (hash.substring(0, 3) !== "000") {
      nonce++;
      hash = SHA256(
        previousBlockHash +
          timestamp +
          JSON.stringify(this.pendingTransactions) +
          nonce
      ).toString();
   
    }
    
    return {hash, nonce};
    }

    //transaction involves amount, sender and recipient
    createTransaction(amount, sender, recipient){
        this.pendingTransactions.push({amount, sender, recipient});
    }


    //create a block which is an object containing transactions and other details
    createBlock(){
        const timestamp=Date.now;

        const transactions=this.pendingTransactions;

        const previousBlockHash=this.getLastBlock().hash;

        const generateHash=this.generateHash(
            previousBlockHash,
            timestamp,
            transactions
        );

        const newBlock={
            index: this.chain.length + 1,
            timestamp,
            transactions,
            nonce: generateHash.nonce,
            hash: generateHash.hash,
            previousBlockHash
        };

        //making pendingTransactions to 0 for next block creation
        this.pendingTransactions=[];
        //adding the newly created block to the chain
        this.chain.push(newBlock);

        return newBlock;
    }
}

module.exports = BlockChain;
