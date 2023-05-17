import { useMetaMask } from "metamask-react"; //메타마스크에서만든 react를 위한 library
import { Wallet } from "../models/Wallet";
import { Chain, KeplrChain } from "../models/Chain";
import Web3 from 'web3';

const useWallets = () => { //이번 멀티월렛의 핵심이 hook, hook을 통해서 extension 설치여부, 어드레스 저장 및 밸런스 정보를 가져올 예정
    const metamask = useMetaMask();
    const _window: any = window; //window에 접근하기 위한 변수, 브라우저에서 가지고 있는 window객체를 자바로 가져옴.

    const isInstalled = (wallet: Wallet): boolean => { //extension 설치 여부 알려줌
        switch (wallet.id) { //select에서 선택하면 설치되어 있는지 확인.
            case "keplr":
                return _window.keplr !== undefined;
            case "metamask":
                return metamask.status !== "unavailable";
            case "phantom":
                return _window.solana?.isPhantom;
            default:
                throw Error(`Unknown wallet with id '${wallet.id}'`);
        }
    }

    const getPhantomProvider = () => {
        if ('phantom' in _window) {
          const provider = _window.phantom?.solana;
      
          if (provider?.isPhantom) {
            return provider;
          }
        }
      
        window.open('https://phantom.app/', '_blank');
      };


    const isConnected = (wallet: Wallet): boolean => { //설치된 wallet과 연결 확인
        switch (wallet.id) {
            case "keplr":
                return false;
            case "metamask":
                return metamask.status === "connected"; //메타마스크의 status field가 커넥트인지.
            case "phantom":
                return _window.solana.isConnected; //isconnted가 연결되었는지 확인.
            default:
                throw Error(`Unknown wallet with id '${wallet.id}'`);
        }
    }

    const connect = async (wallet: Wallet, chain: Chain): Promise<any> => { //실제로 연결 진행, connect시 wait가 필요하므로 async형태로 진행
        switch (wallet.id) {
            case "keplr":
                return _connectKeplrWallet(chain as KeplrChain); //케플러의 체인들 중에 어떤 체인을 연결할지 선택
            case "metamask":
                return metamask.connect(); //라이브러에서 제공
            case "phantom":
                return _window.solana?.connect(); //솔라나 객체안에서 커넥트사용
            default:
                throw Error(`Unknown wallet with id '${wallet.id}'`);
        }
    }

    const _connectKeplrWallet = async (chain: KeplrChain): Promise<any> => {
        return _window.keplr.enable(chain.keplrChainId);
    }

    const getAddress = async (wallet: Wallet, chain?: Chain): Promise<string> => { //address를 가져옴
        switch (wallet.id) {
            case "keplr":
                const keplrChainId = (chain as KeplrChain).keplrChainId; //체인이 별개로 존재하게 되고, 별개의 체인들이 IBC의 형태로 토큰 교환, 체인별로 주소가 다를 수 있음. 따라서 chainiD를 argument로 받음.
                const offlineSigner = _window.getOfflineSigner(keplrChainId);
                const accounts = await offlineSigner.getAccounts();
                return accounts[0].address;
            case "metamask":
                return metamask.account as string;
            case "phantom":
                return _window.solana?.publicKey.toString();
            default:
                throw Error(`Unknown wallet with id '${wallet.id}'`);
        }
    }

    const getBalance = async (wallet: Wallet, address:string): Promise<string> => { //밸런스를 가져옴 결과값: Promise<string> 각 체인 별 시 chain:Chain 추가
        let balance = "";
        switch (wallet.id) {
            case "metamask":
                const web3 = new Web3(_window.ethereum); //web3라이브러리 사용, 인스턴스 생성, 어떤 노드를 바라볼 것인가? 메타마스크에서는 infura노드 제공. 따라서 _window.ethereum하면됨.
                balance = (await web3.eth.getBalance(address))
                // balance string to number
                balance = web3.utils.fromWei(balance, 'ether');
                return balance
            // 이 부분에 phantom, keplr 등 각 지갑에서 지원하는 코인을 잔고 확인을 추가하시면 됩니다
            case "keplr":
                return "0"
            case "phantom":
                //get sol balance, solana web3.js 사용
                return "0"
            default:
                throw Error(`Unknown wallet with id '${wallet.id}'`);
        }
    }

    return {
        isInstalled,
        isConnected,
        connect,
        getAddress,
        getBalance
    }
}

export default useWallets;