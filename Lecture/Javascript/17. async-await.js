//Promise & async-await

async function test() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("done"),1000) //1초 후에 resolve 성공 메세지를 done문자와 함께 반환.
    });
    const result = await promise; //result는 promise를 실행해서 resolve가 나올때 까지 기다림.
    console.log(result); // done
}

test();


//Network request
//Fetch를 promise로 구현 시
function logFetch(url){
    return fetch(url)
    .then(response => response.text())
    .then(text => {
        console.log(text);
    }).catch(err =>{
        console.error('fetch failed', err);
    })
}

//async-await 이용 시 동기적으로 간단하게 표현 가능
async function logFetch(url) {
    try {
        const response = await fetch(url);
        console.log(await response.text());
    }
    catch(err){
        console.log('fetch failed',err);
    }
}