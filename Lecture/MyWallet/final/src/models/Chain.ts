export type ChainId =  'eth' | 'avax' | 'sol' | "axl"  | "juno" | "kava" | string;
export type keplrChainId = "axelar-dojo-1" | "juno-1" | "kava_2222-10"; //keplrChain은 아이디가 좀 특이하여 따로 제작

export type Chain = {
    id: ChainId,
    name: string,
    icon: string
}

export interface KeplrChain extends Chain { //케플러 체인에 대한 인터페이스
    keplrChainId: keplrChainId
}
