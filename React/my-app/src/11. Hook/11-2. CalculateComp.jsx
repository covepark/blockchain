import React, {useEffect} from "react";
import useCount from "./11-1. useCount";


function CalculateComp(props) {
    const [count, plus, minus] = useCount() //useCount 훅을 불러와서 해당되는 변수를 가져오는 형태
    const [isZero, setIsZero] = useState(true);

    useEffect(() => {
        console.log('useEffect')
    }, []);//빈 배열을 추가하면 마운트 될 때만 실행됨

    useEffect(() => {
        console.log('count', count);
        if (count === 0){
            setIsZero(true);
        } else{
            setIsZero(false);
        }
    }, [count]); //count값이 변경될 때마다 실행

    return (
        <div>
            <h3>Count: {count} / {`${isZero}`}</h3>

            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    );
}

export default CalculateComp;