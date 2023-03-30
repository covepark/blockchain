import { useWeb3React } from "@web3-react/core";
import { useEffect, useState, useCallback } from "react";
import { injected } from "./8-2. Connectors";

export function useWeb3Connect() {
    const {activate, active} = useWeb3React(); //web3 js를 활성화 하는 함수, active는 function이라기 보다는 변수로써 active 유무룰 판단해줌.
    const [tried, setTried] = useState(false);

    const tryActivate = useCallback(() => {  //use
        async function _tryActivate() {//activate에 접근해서 활성화하는 용도
            try {
                await activate(injected, undefined, true); //connector를 가져옴, 에러에 대해서 생각하지말자. undefined, throwErrors에대해 에러 발생 시 try, catch에 걸릴 수 있게 true.
            } catch (error) {
                window.alert('Error: ' + (error && error.message))
            }
            setTried(true)
        }
        _tryActivate()
    }, [activate]) //

        useEffect(() => { //tryActivate전체가 바로 실행되기를 원하기 때문에 아래와 같이 작성
            tryActivate()
        }, [tryActivate])
    
        useEffect(() => { //tried가 false이고 active가 true일 경우 active가 true이기 때문에 setTried는 true로 변경 해줌.(웹3가 이미 connect되었다.)
            if(!tried && active){
                setTried(true)
            }
        }, [tried, active])

    return tried;
    };

export function useInactiveListner(flag = false) { //강제로 event를 실행할 수 있는 flag를 넣자.
    const {active, error, activate} = useWeb3React()

    useEffect(() => { //이 안에 윈도우 브라우저에서 ethereum.js에서 가져오는 connect연결이 되어있는지 안되어있는지, 체인이 변경 되었는지 아닌지 판단하는 구문을 작성
        const {ethereum} = window;

        if(ethereum && ethereum.on && !active && !error && !flag) {
            const handleConnect = () => {
                console.log('connect event')
                activate(injected)
            }
            const handleChainChanged = (chainId) => {
                console.log('chainChanged', chainId)
                activate(injected)
            }
            const handleAccountChanged = (accounts) => {
                console.log('accountsChanged', accounts)
                if(account.length >0 ){
                    activate(injected)
                }               
            }

            ethereum.on('connect', handleConnect )
            ethereum.on('chainCahnged', handleChainChanged)
            ethereum.on('accountChanged',handleAccountChanged)


            return () => { //해당되는 이벤트 리스너들이 없어질 경우의 이벤트가 있을 경우에 콜백함수를 다시 시작해줌으로써 완결한 훅이 될 수 있도록 하는 것.
                if (ethereum.removeListener) {
                    ethereum.removeListener('connect', handleConnect)
                    ethereum.removeListener('chainChanged', handleChainChanged)
                    ethereum.removeListener('accountsChanged', handleAccountChanged)
                }
            }
        }


    }, [active, error, flag, activate])
}