//#Web3 Provider
var Web3 = require('web3'); //웹3 라이브러리를 불러옴
//use the given Provider, e.g in Mist, or instantiate a new websocket provider
var web3 = new Web3(Web3.givenProvider || 'ws://node.com:8546'); //web3 생성지에 대한 인스턴스로써 new 키워드를 통해서 Web3를 입력하고, 파라미터로 Provider를 넣게 됨. givenProvider를 통해 가져오거나, 명시적으로 입력 가능. 
// or
var web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://node.com:8546'));

//Web3.givenProvider: 브라우저에서 메타마스크가 설치되어있을때 현재 연결되어있는 provider를 불러와서 기입 가능. 자동적으로 연결.

//--------------------------------------------------------------------------------------------------------
//#Web3.eth
//getBalance: address의 잔액을 가져옴. option: defaultBlock/ callback: callback함수를 통해서 에러값을 첫번째 파라미터로 가져올 수 있고 결과값은 두번째 파라미터로 가져올 수 있음.
web3.eth.getBalance(address [, defaultBlock][, callback]) //
//getBlock: Block과 관련된 정보를 가져옴
web3.eth.getBlock(blockHashOrBlockNumber[, returnTransactionObjects][, callback])
//getTransaction: 트랜잭션 해쉬를 파라미터로 넘기고, 이에 해당하는 트랜잭션을 가져옴.
web3.eth.getTransaction(transactionHash[,callback])
//sendTransaction: 트랜잭션을 네트워크에 전송. transactionObject: from, to, value, gas price 등
web3.eth.sendTransaction(transactionObject[, callback])
//call: 메세지 콜 트랜잭션을 실행하는 형태의 call transaction. block이 마이닝되는건 아니고 노드에 접근해서 call하여 실행만한다.가스가 소비되지는 않음./callOjbect: transactionobject와 비슷한 형태
web3.eth.call(callObject[, defaultBlock][,callback])

//다른 method 역시 리턴값은 promise 형태이기 때문에 값을 가져와서 .then .catch형태로 반환하거나, async-await로 동기적으로 반환할 수도 있음

//--------------------------------------------------------------------------------------------------------
//#web3.eth.Contract
var Contract = require('web3-eth-contract'); //모듈 불러오기
//set provider for all later instances to use
Contract.setProvider('ws://localhost:8546'); //setProvider를 통해서 localhost:8546 웹소켓과 컨트랙트 연결
var Contract = new Contract(jsonInterface, address); //생성자로써 jsonInterface와 address를 가짐, jsonInterface는 컨트랙트를 실행하기 위한 abi형태의 파일임. address는 선택사항이나 스마트 컨트랙트를 콜하는 어드레스.

contract.methods.somFunc().send{{from: ...}} //컨트랙트 접근의 인스턴스를 가지고 해당되는 메소드 중에서 somFunc을 찾아서 이에 대해 send를 통해서 블록체인으로 내보낸다.
.on('receipt',function(){ //받는 이벤트
    ...
});

//--------------------------------------------------------------------------------------------------------
//web3.eth-deploy: 배포
myContract deploy({ //deploy 함수를 통해서 배포
    data: '0x12345...', //컨트랙트 바이트코드
    arguments: [123, 'My String'] //선택사항, constructor 생성자에 전달하기 위한 값들
})
.send({ //send를 통해서 과정을 좀 더 연결 가능. 
    from: '0x1234566890', //컨트랙트를 배포하기 위한 배포자의 어드레스
    gas: 1000000, 
    gasPrice: '300000000000000'
}, function(error, transactionHash){...})
.on('error',function(error){...}) //event handler
.on('transactionHash',function(transactionHash{...}) //event handler
.on('receipt',function(receipt){ //event handler
    console.log(receipt.contractAddress) //contains the new contract address. //새로운 컨트랙트 어드레스에 접근. 이 정보를 저장해야함.
})
.on('confirmation',function(confirmationNumber, receipt){...})
.then(function(newContractInstance){ //배포가 끝난이후에 새로운 인스턴스에 대한 정보를 가져올 수 있는 것임.
    console.log(newContractInstance.options.address) //instance with the new contract address
})

//#Web3.eth.contract-methods
myContract.methods.myMethod([param1[, param2[, ...]]])

//calling a method //myMethod: 함수명
myContract.methods.myMethod(123).call({from: '0xde0B...'}, //call의 경우 블록체인에 대한 데이터를 수정할 수 없고 가져오는 용도로 주로 쓰임. 가스소비X
function(error, result){
});
//or sending and using a promise
myContract.methods.myMethod(123).send({from: '0xde0B...'}) //send는 컨트랙트 상에서 블록체인 정보를 수정하거나 접근할 때 send를 통해서 함수를 call하게 됨.
.then(function(receipt){
    //receipt can also be a new contract instance, when coming from a "contract.deploy({...)}.send()"
});

//#web3.eth.contract-methods

//or sending and using the events
myContract.methods.myMethod(123).send({from: '0xde0B...'}) //event를 받아올 수 있다.라는 걸 얘기하는 거임.
.on('transcationHash', function(hash){
    ...
})
.on('receipt', function(receipt){
    ...
})
.on('confirmation', function(confirmationNumber, receipt){
    ...
})
.on('error', function(error, receipt){
    ...
});

//#web3.eth.Contracts-events
myContract.events.MyEvent({ //이벤트에 대해서 파라미터가 있음. 
    filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, //using an array means OR: e.g. 20 or 23 //해당되는 이벤트에 대해서 filter를 걸어 해당되는 이벤트만 받아올 수 있음.
    fromBlock: 0 //이벤트가 블록이 0혹은 100부터이벤트를 받아온다.
}, function(error,event){console.log(event);})
.on("connected", function(subscriptionId){
    console.log(subscriptionId);
})
.on('data',function(event){ //data를 통해서 해당되는 이벤트의 값을 가져올 수 있음. 특정 이벤트 값을 가져와서 프론트단에 뿌린다던지.
    console.log(event); //same results as the optional callback above
})
.on('changed', function(event){
    //remove event from local database
})
.on('error', function(error, receipt){ //if the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
    ...
})

//#web3.utils-BN
//Big number.js: 사용하는 이유, 워낙 값들이 크기 때문에 단순히 자바스크립트에서 number란 타입을 가지고 값을 표현하기에는 힘들기때문에 사용.
var BN = web3.utils.BN;
new BN(1234).toString();
> "1234"

new BN("1234").add(new BN('1')).toString(); //add 혹은 minus등의 method가 있음.
> "1235"

new BN('0xea').toString();
> "234"

//#web3.utils-sha3
web3.utils.sha3(string)
web3.utils.keccak256(string) //ALIAS

web3.utils.sha3('234'); //taken as string
> "0xc1912fee45d61c87cc5ea59dae311904cd86b84fee17cc96966216f811ce6a79"
web3.utils.sha3(new BN('234'));
> "0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a"
web3.utils.sha3('234');
> null //can't calculate the hash of a number
web3.utils.sha3(0xea); //same as above, just the HEX representation of the number
> null
web3.utils.sha('0xea'); //will be converted to a byte array first, and then hashed
> "0x2f2067..."

//#web3.utils-isAddress
//address가 타당한 address인지 아닌지를 판단
web3.utils.isAddress('Oxc1912fee45d61c87cc5ea59dae31190ffffff232d');
> true
web3.utils.isAddress('c1912fee45d61c87cc5ea59dae31190fffff232d');
> true
web3.utils.isAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D');
> true //as all is uppercase, no checksum will be checked

web3.utils.isAddress('0Xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
> true

web3.utils.isAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
> false //wrong checksum

//#web3.utils-wei
//Wei: 이더의 최소단위. toWei: 이더의 최소단위인 wei로 변환시켜주는 method
web3.utils.toWei(number [, unit])
web3.utils.toWei('1','ether');
> "1000000000000000000"

web3.utils.toWei('1','finney'); 
> "10000000~"

//1이란 것에 대해서 wei단위를 이더단위로 변환시켜줌.
web3.utils.fromWei(number [, unit])
web3.utils.fromWei('1','ether');
> "0.000000000000000001"

web3.utils.fromWei('1','finney');
> "0.00000~1"