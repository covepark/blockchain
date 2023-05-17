import Web3 from "web3";

var web3 = new Web3("HTTP://127.0.0.1:7545") //RPC주소를 가져와함. 로컬의 가나슈 이더리움 노드 사용, HTTP 프로바이더

const account = web3.eth.accounts.create() //랜덤한 account가 private key를 가지고 생성됨
//console.log("account : ", account) //이를 그대로 보관한다면 도용의 위험이 있음

const privateKey = account.privateKey
const encrypt = web3.eth.accounts.encrypt(privatekey, "password") //privatekey 암호화
const decrypt = web3.eth.accounts.decrypt(encrypt, "password") //복호화
//애초에 이런 기능들을 wallet provider에서 담당해달라. wallet provider를 쓰는 이유 중 하나

const txResult = await web3.eth.accounts.signTransaction(
    {
        to: "0x095dE5138beF13274f8974C2c0Ebb4C9141fD865",
        value: '1000',
        gas: 1000,
        gasPrice: 10,
        gasLimit: 1000000,
    },
    privateKey //privateKey 노출 위험.
)
console.log(txResult)

//메타마스크, 팬텀, 케플러 등의 docs에 사인하는 법을 제공해줌.