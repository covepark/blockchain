import './App.scss';
import { Card, CardContent } from '@mui/material';
import { useState } from 'react';


import { ConnectWallet } from './components/ConnectWallet';

import wallets from './wallets.json';
import { Wallet } from './models/Wallet';
import { Chain } from './models/Chain';


function App() {
    const [state, setState]  = useState<{
        wallet?: Wallet, //월렛타입
        chain?: Chain, //체인타입
    }>({});

    const handleWalletConnected = (wallet: Wallet, chain: Chain) => { //월렛과 체인 인자를 받아서 setState에 wallet과 chain을 저장. state안에 있는 월렛과 체인을 통해서 어떤 월렛, 어떤 체인이 연결되었는지 connectwallet외부에서 관리 가능함.
        setState({wallet, chain});
    }

    return (
        <div className="App">
            <Card className='AppBody'>
                <CardContent>
                    <ConnectWallet wallets={wallets} onWalletConnected={handleWalletConnected}/>
                </CardContent>
            </Card>
        </div>
    );//wallets과 onWalletConnected를 밖에서 받아옴.
}

export default App;
