//#조건부 렌더링
//- 조건에 따라 다르게 렌더링 함을 뜻함.
function LoginPanel(props){
    let loginStatus;
    if(props.isLoggedIn) {
        loginStatus = <div>Logged In</div>;
    } else{
        loginStatus = <div>Logged Out</div>;
    }

    return (
        <div>{loginStatus}</div>
    )
}

//#Inline Conditions
//- React에서 많이 사용되는 패턴임
let isLoggedIn = true;
{ isLoggedIn && ( <p>Logged In...</p>)} //isLoggedIn이 true일 때만 Logged In이 보임

<div>{isLoggedIn ? 'Logged In' : 'Logged Out'}</div>