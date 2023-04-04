//메타마스크와 Dapp 연동

import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { injected } from "../8. Utils/8-2. Connectors";
import styled from 'styled-components';

const StyledActivateButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: green;
    cursor: pointer;
`;

const StyledDeactivateButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: red;
    cursor: pointer;
`;

function Activate() { //component기 떄문에 대문자로 시작
    const {activate, active} = useWeb3React();

    const [activating, setActivating] = useState(false); //activata하는 동안 시간이 걸리기 때문에 활성화 여부를 알 수 있는 state를 만든 것임.ㅈ

    function handleActive(event) {
        event.preventDefault(); //기본적으로 handleActive 함수로써 더블린(?) 이벤트를 막기 위해서 사용. 클릭이벤트를 받은 이후에 핸들엑티브 함수 안에서 대부분의 모듈을 실행하기 위해서는 preventDefault라는 함수를 호출해야함.

        async function _activate(activate) {
            setActivating(true); //activate 함수를 실행할 때 쯤에 true를 보내고,
            await activate(injected); //activate가 완료되면,
            setActivating(false); //false로 전환.
        }

        _activate(activate) //handleActive를 실행할 경우에 activate함수를 전달받아서 _active에 넘겨주게됨
    }

    return (
        <StyledActivateButton disabled={active} onClick={handleActive}>Connect</StyledActivateButton>//버튼 자체가 active할 경우, 즉 connection이 된 경우에는 버튼을 비활성화 해줌
    );

}

function Deactivate (){
    const {deactivate, active} = useWeb3React(); //deactivate는 동기적으로 할 필요가 없음

    function handleDeactivate(event){ 
        event.preventDefault();

        deactivate()
    }

    return ( 
        <StyledDeactivateButton disabled={!active} onClick={handleDeactivate}>Disconnect</StyledDeactivateButton> 
    );
}

export function Connect() { 
    const context = useWeb3React(); //context를 가져와서 에러가 뜰때는 alert 발생
    if (context.error) {
        window.alert(context.error);
    }

    return (
        <div>
            <Activate />
            <Deactivate />
        </div>
    )
}