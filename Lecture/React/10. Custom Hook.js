//#훅만들기
//- 함수 컴포넌트에서만 사용 가능
//- Top level에서 훅을 호출해야 함.
//- 컴포넌트가 렌더링될 때마다 같은 순서로 호출
//- 리액트가 기본 제공하는 훅 외에 추가적인 기능을 통해 직접 훅을 생성하여 사용 가능
import {useState, useEffect} from 'react';

//useMyInfo 커스텀 훅을 import하는 다른 컴포넌트에서는 기본적으로 이 훅을 호출하게 됨.
function useMyInfo(id) {
    const [myInfo, setMyInfo] = useState(null);
    useEffect(() => { //컴포넌트가 마운트 될 때 실행 됨.
        API.getMyInfo(id, (info) => { //getMyInfo의 return값 info를 setMyInfo에 넣음.
            setMyInfo(info);
        }); //가상으로 서버 API가 있다고 가정을하고 이 함수를 호출했을 때 response값을 setMyInfo에 넣는 구문임.
    });
    return myInfo;
}
