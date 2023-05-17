//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract EthTransfer{


    event Transfer();
    
    //ETH를 전송하는 3가지 방법: transfer, send, call
    //address(to).transfer/send/call

    function sendTransfer(address payable to) public payable{
        to.transfer(msg.value);
    }

    function sendSend(address payable to) public payable{
        bool result = to.send(msg.value); //send는 transfer와 다르게 전송 성공/실패 유무 확인 가능
        if(result == true){
            emit Transfer();
        }else{
            revert();
        }
    }


    //"Call" is a low level function developers use to interact with other contracts.
    //Calls can also be used to execute other functions in the recipient smart contract, using Ether provided by the caller to pay for the transaction.
    //The call function also has the advantage of returning the transaction status as a boolean with the return value sent as a variable.
    function Call(address payable to) public payable{
        (bool result, /*bytes memory data*/) = to.call{value:msg.value}("");
        require(result, "Failed to send Ether");
        /*if(result == true){
            emit Transfer();
        }else{
            revert();
        }*/
    }

    //Calldata is a type of temporary storage, containing the data specified in a function’s arguments.
    //The difference between it and memory, another type of temporary storage, is that calldata’s immutability—whatever is stored inside calldata cannot be changed.

    //What's the difference between call and delegatecall?
    //The difference between call and delegatecall is that delegatecall will execute the called function as if its code was entirely part of the smart contract that is doing the calling.
    //In contrast, the call method will call the function as it is, as a part of another smart contract.
    //In practice, this means the called function will use the caller's storage, msg.sender, and msg.value.

}
