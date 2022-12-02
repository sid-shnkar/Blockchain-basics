// SPDX-License-Identifier: UNLICENSED
//even to execute this smart contract, some amount of etherium/gas is required
pragma solidity ^0.8.7;

contract Blockchain {
    struct BlockStruct{
        uint index;
        uint timestamp;
        uint amount;
        address sender;
        address recipient;
    }

    //creating a block event template | address can be combination of string and integer
    event BlockEvent(uint amount, address sender, address recipient);

    BlockStruct[] chain;
    uint chainCount;

    constructor(){
        chainCount=0;
    }

    //function to add a new block to the chain
    function addBlockToChain(uint amount, address payable recipient) public{
        chainCount+=1;

        chain.push(
            BlockStruct(
                chainCount,
                block.timestamp,
                amount,
                msg.sender,
                recipient
            )
        );

        emit BlockEvent(amount, msg.sender, recipient);
    }

    //can return the data through "storage" or "memory", using memory is cheaper
    // in terms of gas/ether requirement
    //"view" has it's common meaning here, "public" is a modifier used here
    function getChain() public view returns(BlockStruct[] memory){
        return chain;
    }

    function getChainCount() public view returns(uint){
        return chainCount;
    }

}