//#Hook
//- 갈고리를 거는 것 처럼 원하는 시점에 정해진 함수를 실행할 수 있도록 지원함.
//- 함수형 컴포넌트에서 state와 관련한 기능 및 생명주기 함수들을 지원하기 위해 나온 것
//- 훅의 이름은 모두 use로 시작
//- 대표적으로 많이 사용되는 훅으로서 useState, useEffect, useMemo 등이 있음.

//#useState
//- State를 사용하기 위한 Hook
//- const[변수명, set함수명] = useState(초깃값);
function Counter(props) {
    const[count, setCount] = useState(0); //변수 각각에 대해서 set함수가 각각 존재함. 
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Button</button>
        </div>
    )
}

//#useEffect
//- 컴포넌트가 마운트 된 이후, 의존성 변수들 중 하나라도 값이 변경되었을 때 이 함수가 실행됨

//- return() => {
//     컴포넌트가 언마운트 되기 전에 실행됨
// }
//},[의존성 변수1, 의존성 변수2, ...])

//- useEffect(() => {
//     마운트와 언마운트 시에 한번씩 실행. (배열 생략 시, 컴포넌트 업데이트 시 마다 실행)
// },[])
function Counter(props){
    const[count, setCount] = useState(0);
    useEffect(() =>{
        const timer = setInterval(() => {console.log('타이머 진행중...'); }, 1000); //함수형 컴포넌트가 마운트 될 경우에 타이머 동작
        return () => { clearInterval(timer);} //unmount될 경우 clearInterval을 통해 타이머 해제
    }, []) //빈배열은 카운터가 mount될 경우에 useEffect함수들이 먼저 실행
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Button</button>
        </div>
    )
}