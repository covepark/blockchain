import { Chain } from "./Chain"; 

export type WalletId = 'keplr' | 'metamask' | 'phantom' | string; //월렛타입 세가지 제작

export type Wallet = {
    id: WalletId,
    name: string,
    icon: string,
    chains: Array<Chain> {//관리할 체인들이 들어갈 chain field가 들어감. array 형태로.
    }
}

