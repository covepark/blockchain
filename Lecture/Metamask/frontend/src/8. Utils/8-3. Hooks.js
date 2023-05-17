import { useWeb3React } from "@web3-react/core";
import { useEffect, useState, useCallback } from "react";
import { injected } from "./8-2. Connectors";

export function useWeb3Connect() {
    const {activate, active} = useWeb3React(); //web3 js를 활성화 하는 함수, active는 function이라기 보다는 변수로써 active 유무룰 판단해줌.
    const [tried, setTried] = useState(false); //Web3connect를 통해서 시도를 했는지에 대한 변수를 저장하기 위함. 기본값 false.
    const tryActivate = useCallback(() => {  //injected를 활용해서 이미 활성화가 되어있는지 안되어있는지르 ㄹ가져오게 될 것임.
        async function _tryActivate() {//activate에 접근해서 활성화하는 용도
            try {
                await activate(injected, undefined, true); //connector를 가져옴, 에러에 대해서 생각하지말자. undefined, throwErrors에대해 에러 발생 시 try, catch에 걸릴 수 있게 true.
            } catch (error) {
                window.alert('Error: ' + (error && error.message))
            }
            setTried(true)
        }

        _tryActivate()
    }, [activate]) //useCallback 사용 시 좀더 메모리 효율적이게 됨

    //tryActivate는 언제 실행되느냐?
    useEffect(() => {  //tryActivate전체가 바로 실행되기를 원하기 때문에 useEffect 작성.
        tryActivate()
    }, [tryActivate])

    //conntection이 된 이후에 tried가 됐느냐 안됐느냐를 판단하기 위해서 useEffect hook을 하나 더 만듦.
    useEffect(() => { //tried가 false이고 active가 true일 경우 active가 true이기 때문에 setTried는 true로 변경 해줌.(웹3가 이미 connect되었다.)
        if(!tried && active){
            setTried(true)
        }
    }, [tried, active])

    return tried;
    };

//이더리움 자체 라이브러리를 가지고 와서 이더리움 상태(account 변경, 체인변경 등)를 감지해서 이를 Web3 리액트 라이브러리와 연동.
//이더리움 라이브러리 자체가 브라우저에 감지가 되는 경우에 대해서 연결(ex. 메타마스크에 이더리움 라이브러리가 감지가 될 경우, 이를 web3 react와 hook을 이용해서 자동적으로 연결)
export function useInactiveListner(flag = false) { //외부에서 실행되게끔하는 변수를 넣는다. 강제로 event를 실행할 수 있는 flag를 넣자.
    const {active, error, activate} = useWeb3React()

    useEffect(() => { //이 안에 윈도우 브라우저에서 ethereum.js에서 가져오는 connect연결이 되어있는지 안되어있는지, 체인이 변경 되었는지 아닌지 판단하는 구문을 작성
        const {ethereum} = window; //기본적인 브라우저에 이더리움이 감지될 경우에

        //3가지 핸들러를 통해 이벤트 감지, activate 연결
        if(ethereum && ethereum.on && !active && !error && !flag) {
            const handleConnect = () => {
                console.log('connect event')
                activate(injected)
            }
            const handleChainChanged = (chainId) => {
                console.log('chainChanged', chainId) //chainID가져올 수 있음
                activate(injected)
            }
            const handleAccountChanged = (accounts) => {
                console.log('accountsChanged', accounts) //account가져올 수 있음
                if(account.length >0 ){
                    activate(injected)
                }               
            }1

            ethereum.on('connect', handleConnect ) //ethereum.on: 이더리움 이벤트 핸들러
            ethereum.on('chainCahnged', handleChainChanged) //체인 변경 시 핸들러
            ethereum.on('accountChanged',handleAccountChanged) //어카운트 변경 시 핸들러

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