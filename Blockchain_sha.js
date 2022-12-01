const SHA256=require("sha256");

console.log(SHA256("man").toString());


let hash="";
let nonce=0;

while(hash.substring(0,3) != "000"){
    nonce++;
    hash=SHA256("man"+nonce).toString();
}

console.log(nonce);
console.log("\n");
console.log(hash);