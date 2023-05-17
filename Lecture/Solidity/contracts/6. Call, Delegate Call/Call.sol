//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Calculation{

    event Transfer();

    function plusData(uint a, uint b) external pure returns(uint){
        return a+b;
    }

    fallback() external payable{ //없는 함수를 호출하는 경우
        emit Transfer(); //etherscan의 Log에서 확인가능
    }

    receive() external payable{
        revert();
    }

}

contract EthTransfer{

    event Transfer();

    function isContract(address _addr) private view returns (bool isContract_){
        uint32 size;
        assembly{ //inline assembly 
            size := extcodesize(_addr) //해당 주소의 code state정보의 size정보를 가져옴
        }
        return (size > 0); //CA, EOA. 사이즈가 0보다 크면 CA
    }

    //callFunc과 input값(_address, _a, _b)가 input data로 들어감.
    //callFuncBytes는 Internal Txns에서 처리됨.(contract간의 주소)
    function callFunc(address payable _address, uint _a, uint _b) public returns(bytes memory){
        bytes memory callFuncBytes = abi.encodeWithSignature("plusData(uint256,uint256)",_a,_b); //함수를 호출할 때 들어갈 input data의 메세지 값을 동일하게 생성해서 전달해야함.
        //띄어쓰기는 넣으면 안됨, function plusData에는 타입이 uint라고 적혀있지만, 실제 데이터 타입인 uint256을 써줘야함.
        if(isContract(_address)){
            (bool result, bytes memory sum) = _address.call(callFuncBytes); //이더리움을 전송하는 케이스는 아니기 떄문에 {value : msg.value} 생략//'call'은 호출한 컨트랙트의 인스턴스 상에서 처리가 되는 형태
            return sum;
        }else{
            revert();
        }
    }

    //앞에서는 없었던 Log 생성됨.
    //Log: Fallback함수의 event 발생.
    function callNotExistFunc(address payable _address, uint _a, uint _b) public returns(bytes memory){
    bytes memory callFuncBytes = abi.encodeWithSignature("NotExistFunc(uint256,uint256)",_a,_b); //함수를 호출할 때 들어갈 input data의 메세지 값을 동일하게 생성해서 전달해야함.
    //띄어쓰기는 넣으면 안됨, function plusData에는 타입이 uint라고 적혀있지만, 실제 데이터 타입인 uint256을 써줘야함.

    if(isContract(_address)){
        (bool result, bytes memory sum) = _address.call(callFuncBytes); //이더리움을 전송하는 케이스는 아니기 떄문에 {value : msg.value} 생략
        return sum;
    }else{
        revert();
    }
}

}