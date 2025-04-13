import * as crypt from "crypto"
class Block{
    index:number;
    timestamp:string;
    data:any;
    previous_hash:string;
    hash:string;

    constructor(_index:number,_timestamp:string,_data:any,_previous_hash=""){
        this.index=_index;
        this.timestamp=_timestamp;
        this.data=_data;
        this.previous_hash=_previous_hash;
        this.hash=this.generateHash();
    }

    generateHash():string{
        return crypt
        .createHash("sha256")
        .update(this.index+this.timestamp+JSON.stringify(this.data)+this.previous_hash)
        .digest("hex");
    }
}

class Blockchain{
    chain:Block[];

    constructor(){
        this.chain=[this.createGenesisBlock()];
    }
    createGenesisBlock():Block{
        return new Block(0,new Date().toISOString(),"Genesis Block","0");
    }
    getLatestBlock():Block{
        return this.chain[this.chain.length-1];
    }
    addNewBlock(newBlock:Block):void{
        newBlock.previous_hash=this.getLatestBlock().hash;
        newBlock.hash=newBlock.generateHash();
        this.chain.push(newBlock);
    }
    validateChain():boolean{
        for(let i=1;i<this.chain.length;i++){
            const prev = this.chain[i-1];
            const curr = this.chain[i];

            if(curr.hash!==curr.generateHash()) return false;
            if(curr.previous_hash!==prev.hash) return false;
        }
        return true;
    }
}

const blockchain = new Blockchain();
blockchain.addNewBlock(new Block(1,new Date().toISOString(),{deposit:100}));
blockchain.addNewBlock(new Block(2,new Date().toISOString(),{withdraw:50}));

console.log(`blockchain`,JSON.stringify(blockchain,null,2));
console.log(`is validate chain`, blockchain.validateChain());