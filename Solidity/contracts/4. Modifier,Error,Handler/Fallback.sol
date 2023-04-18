//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Fallback{

    uint public data = 0;

    constructor(){
        data = 5;
    }

    function order() external payable{
        
        data = 9;
    }

    //ERC20 토큰(100 토큰)을 전송하지 않고 100 ETH를 전송하는 경우 예방하는 차원
    //무기명 함수, 이름이 없는 함수
    //external 필수, payable 필수(?)
    //스마트 컨트랙트가 이더를 받을 수 있게 한다
    //이더를 받고 난 후 어떠한 행동을 취하게 할 수 있게 한다.
    //call함수로 없는 함수가 불려질 때, 어떠한 행동을 취할 수 있게 한다.
    //receive: 순수하게 이더만 받을때 작동.
    //fallback: 함수를 실행하면서 이더를 보낼때, 해당하는 함수가 없을 때 작동.
    
    //This function cannot have arguments, cannot return anything and must have external visibility.
    //The fallback function always receives data, but to also receive Ether, you should mark it as payable.
    fallback() payable external{//사용자가 스마트컨트랙트 내에 존재하지 않는 함수를 호출 할 때, msg.data가 비어있지 않는 경우
        revert();
        //emit(~~~~~);
        //Proxy contract, 다른 컨트랙트를 호출하게 하는 경우에도 사용.
    }
    //The function cannot have arguments, cannot return anything and must have external visibility and payable state mutability.
    receive() payable external{//사용자가 함수를 호출하지 않고 ETH를 이 컨트랙트에 전송할 때, msg.data가 비어있는 경우에 사용자가 ETH를 전송하는 경우
        revert(); //rollback 발생하여 사용자에게 100이더 돌려줌
    }

}