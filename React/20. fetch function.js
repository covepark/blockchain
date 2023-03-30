//#fetch function
fetch('api 주소')
.then(function(res){
    return res.json();
})
.then(function(res){
    //data를 응답받은 후 로직
});

//#Server Endpoint- GET
//유저정보 가져오기
base url: https://api.test.com
endpoint: /user/3
method: get
Response:
{
    "success": Boolean,
    "user": {
        "name": string,
    }
}

//위를 react 상에서 구현
import React, {useEffect} from 'react';

function User(props) {
    useEffect(() => { //기본적으로 component가 마운트 될경우에 바로 실행할 수 있게 useEffect 사용
        const {userId} = props; //userId 받아옴.
        fetch(`https://api.test.com/user/${userId}`) //baseURL과 endpoint가 합해진 형태의 서버 경로를 기입을 하게됨. 이를 통해서 해당되는 서버 엔드포인트의 api call이 가능함.
        .then(res => res.json())
        .then(res => {
            if(res.success) {
                console.log(`${res.user.name}`);
            }
        });
    },[]);
}

//#Server Endpoint - POST
//유저정보 저장하기
base url: https://api.test.com
endpoint: /user
method: post
Request Body:
{
    "name": string
}
Response:
{
    "success": Boolean,
    "message": string
}



//위를 react 상에서 구현
fetch('https://api.test.com/user', { //api 경로 기입
    method: 'post',
    body: JSON.stringify({ //문자열의 형태로 넘겨줘야하기 떄문에 stringify사용
        name:"will" //키 값
    })
})
.then(res => {
    if(res.status === 200){ //200인 경우 성공적으로 응답
        alert("complete"); //alert 창 출력.
    } else if(res.status === 403){ //403: 권한오류
        return res.json(); //json 호출 후 리턴
    }
})
.then(res => { //콘솔로그에서 데이터를 받아 메세지 출력
    console.log("error", res.message);
})
