const BlockChain=require("./Blockchain");

//creating an instance of a coin say sidCoin !!
let sidCoin=new BlockChain;


sidCoin.createTransaction(100, "dfjkdsfjksdfds", "RJTJFKJNVFKNV");
sidCoin.createBlock();


sidCoin.createTransaction(60, "yuuykdsfjksdfds", "GFJGFFKJNVFKNV");
sidCoin.createBlock();


sidCoin.createTransaction(870, "fdgrewtdsfjksdfds", "TRH5665FKJNVFKNV");


console.log(sidCoin);
console.log(sidCoin.chain[2].transactions);