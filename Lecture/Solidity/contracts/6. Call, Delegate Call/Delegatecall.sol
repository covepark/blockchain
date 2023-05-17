//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract Calculation{
    address public owner;
    uint public value;

    function plusData(uint a, uint b) external pure returns(uint){
        return a+b;
    }

    fallback() external payable{ //delegatecall시 해당 contract를 호출한 contract의 owner와 value가 바뀜.
        owner = msg.sender;
        value = msg.value;
    }

    receive() external payable{
    }
}

contract DelegateCallFunction{
    address public owner;
    uint public value;

    function isContract(address _addr) private view returns (bool isContract_){

        uint32 size;
        assembly{ 
            size := extcodesize(_addr)
        }
        return (size > 0); 
    }

    function callFunc(address payable _address, uint _a, uint _b) public returns(bytes memory){
        bytes memory callFuncBytes = abi.encodeWithSignature("plusData(uint256,uint256)",_a,_b); 

        if(isContract(_address)){
            (/*bool result*/, bytes memory sum) = _address.delegatecall(callFuncBytes); //'call'은 호출한 컨트랙트의 인스턴스 상에서 처리가 되는 형태, 'delegatecall'은 함수를 delegatecall contract로 가져와서 처리하는 구조. 
            //데이터 인스턴스가 어디에서 처리되느냐의 차이.
            return sum;
        }else{
            revert();
        }
    }

    function callNotExistFunc(address payable _address, uint _a, uint _b) public payable returns(bytes memory){//payable 선언해야 ETH 전송 가능
    bytes memory callFuncBytes = abi.encodeWithSignature("NotExistFunc(uint256,uint256)",_a,_b);
   
    if(isContract(_address)){
        (bool result, bytes memory sum) = _address.delegatecall(callFuncBytes); 
        return sum;
    }else{
        revert();
    }
    }

}