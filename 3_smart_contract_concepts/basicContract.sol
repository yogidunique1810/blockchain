//SPDX-License-Identifier:Unlicensed
pragma solidity >0.7.0 <0.9.0;
contract HelloBlockchain{
    string message;

    constructor(){
        message="Hello Blockchain";
    }

    function setMessage(string memory _message) public{
        message = _message;
    }

    function getMessage() public view returns(string memory){
        return message;
    }
}