import {Web3Provider} from '@ethersproject/providers';


export function getProvider(provider) {
    const web3Provider = new Web3Provider(provider); //메타마스크와 같은 다양한 third party provider들이 들어갈 수 있음.
    web3Provider.pollingInterval = 1000 //polling주기가 1초
    return web3Provider;
}