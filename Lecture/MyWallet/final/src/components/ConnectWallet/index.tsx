import { Alert, Button, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { useSnackbar } from 'notistack'; //연결이성공했는지 실패했는지 알려주기 위한 notify. notistack 사용.
import { useState } from 'react';
import useWallets from '../../hooks/useWallets'; //hook
import { Chain } from '../../models/Chain';
import { Wallet } from '../../models/Wallet';
import './ConnectWallet.scss'

export type ConnectWalletType = { //외부에서 인자로 받음
    wallets: Array<Wallet>,
    onWalletConnected: (wallet: Wallet, chain: Chain) => void //wallet과 chain을 인자로 받음
}


export const ConnectWallet = (props: ConnectWalletType) => { //어떤 체인을 선택하고, 어떤 월렛을 선택할 것인가
    const {
        wallets,
        onWalletConnected
    } = props; //wallet들의 정보와 onWalletConnected함수를 props을 통해 받아옴.

    const [wallet, setWallet] = useState<Wallet | null>();
    const [walletId, setWalletId] = useState('');
    const [chains, setChains] = useState(new Array<Chain>()); //체인의 정보를 담음. 전체 체인을 관리할 state
    const [chain, setChain] = useState<Chain | null>(); //각 체인을 관리할 state, chain이거나 null타입일 것이다.
    const [chainId, setChainId] = useState(''); //체인별로 아이디가 있음 그 아이디를 저장할 state
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');
    
    const [walletInstalled, setWalletInstalled] = useState<boolean>(); //월렛 extension이 설치되어있는지 확인하는 state

    const { enqueueSnackbar } = useSnackbar();
    const {
        isInstalled,
        isConnected,
        connect,
        getAddress,
        getBalance
    } = useWallets(); //hook을 사용하기 위해 내부에 객체형태로 받음. usewallets hook내부에 있는 5가지 method



    const handleSelectWallet = (event: any) => { //이벤트라는 값에서 내가 어떤 값을 선택하지를 vaule를 통해서 가져오고, 그 값이 wallet.json에 들어있는 값과 동일한지 확인. 만약 동일하다면 해당 wallet과 chain을 설정해주는 코드
        const selectedWallet = wallets.find(wallet => wallet.id === event.target.value);
        setChain(null);
        setChainId("");
        setChains([]);

        if (selectedWallet) {
            setWalletId(event.target.value);
            setWallet(selectedWallet);
            setChains(selectedWallet.chains);

            const firstChain = selectedWallet.chains[0];
            if(selectedWallet.chains.length === 1) {
                setChain(firstChain);
                setChainId(firstChain.id);
            }

            const walletInstalled = isInstalled(selectedWallet); //isInstalled는 hook에서 구현할 것
            setWalletInstalled(walletInstalled);
        }
    }; //select 버튼을 눌렀을 때, 이벤트를 감지하고 어떤 월렛을 선택할지 정하는 함수

    const handleSelectChain = (event: any) => {
        const selectedChain = chains.find(chain => chain.id === event.target.value);

        if (wallet) {
            setChainId(event.target.value);
            setChain(selectedChain);

            if (isConnected(wallet) && selectedChain) {
                onWalletConnected(wallet, selectedChain)
            }
        }
    }; //체인이 바뀌었는지 감지하는 method

    const handleConnectWallet = async () => { //에러가 발생할 수도 있으니 try,catch 사용. hook에서 가져온 connect 사용.
        try {
            if (wallet && chain) { //월렛과 체인이 설정되어있어야만 커넥트 실행가능
                await connect(wallet, chain);

                onWalletConnected(wallet, chain);
                enqueueSnackbar("Operation success", { variant: "success" }); //연결이 성공했는지 확인 
                const _address = await getAddress(wallet,chain) //get Address
                setAddress(_address);
                const _balance = await getBalance(wallet,_address) //get Balance
                setBalance(_balance)
            }
        }
        catch (e) {
            console.log(e);
            enqueueSnackbar("Operation cancelled", { variant: "error" });
        }
    }

    const handleCleanSelections = () => { //state를 모두 초기화 시키는 작업
        setWallet(null);
        setWalletId('');
        setChain(null);
        setChainId('');
        setChains([]);
        setAddress('');
        setBalance('');
        setWalletInstalled(false);
    }

    return (
        <div className='ConnectWallet'>
            <h4> Wallet Connector </h4>
            <Box id='AddressBox'>{address}</Box>
            { wallet?.id === 'metamask' && <Box id='TokenBox'>{balance} eth</Box>}
            { wallet?.id === 'keplr' && <Box id='TokenBox'>{balance} atom</Box>}
            { wallet?.id === 'phantom' && <Box id='TokenBox'>{balance} sol</Box>}
            <FormControl className='FormControl' fullWidth>
                <InputLabel>Select Wallet</InputLabel>
                <Select
                    id='WalletDropdown'
                    labelId='Wallet'
                    value={walletId}
                    label='Select Wallet'
                    onChange={handleSelectWallet}> {//어떤 상태에서 select를 처리할 것인가
}
                    {wallets.map((wallet, index) => ( 
                        <MenuItem
                            className='DropdownItem'
                            key={index}
                            value={wallet.id}>
                            <div className={'icon ' + wallet.icon} />
                            <span>{wallet.name}</span>
                        </MenuItem>
                    ))} {// json형태이고 map을 이용해 parsing
                    }
                </Select>
            </FormControl>
            {wallet && !walletInstalled
                && <Alert severity="info" onClose={() => handleCleanSelections()}>Install {wallet.name} to connect to select a chain</Alert>}
                {//월렛이 설치가 안되어 있을 경우, Alert사용
}
            {wallet && walletInstalled && <FormControl className='FormControl' fullWidth> {//체인을 선택하는 부분을 매핑해서 월렛이 설치되어있어야만 컴포넌트 생성 
}

                <InputLabel>Origin Chain</InputLabel>
                <Select
                    id='OriginChainDropdown'
                    labelId='OriginChainDropdown'
                    value={chainId}
                    label='Origin Chain'
                    onChange={handleSelectChain}>
                    {chains.map((chain, index) => (
                        <MenuItem
                            className='DropdownItem'
                            key={index}
                            value={chain.id}>
                            <div className={'icon ' + chain.icon} />
                            <span>{chain.name}</span>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>} 
            {wallet && chain && isInstalled(wallet) && <div className='ConnectWalletFooter'>
                <Button variant='contained'
                    fullWidth
                    onClick={() => handleConnectWallet()}>
                    Use {wallet.name} with {chain?.name}
                </Button>
            </div>
            } {//extension으로 부터 address를 가져오는 작업. 월렛과 체인을 가져온 후에 extension에 커넥트하는 작업이 필요함. 버튼을 만들어 요청을 보낼꺼임.
            //isInstalled: extension이 브라우저에 설치가 되었는지 확인. 모두가 참이라면 그때서야 버튼을 활성화 할거임.
            //chain이 없을수도 있기 때문에 물음표
}
        </div>
    )
}
