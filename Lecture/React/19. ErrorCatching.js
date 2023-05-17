//#Error Catching
import {useState} from "react";
import Mybutton from "./my-app/src/13. EventHandler/13-1. MyButton";
const MyButton = () => {
    const [error, setError] = useState(null);
    const handleClick = () => {
        try { //try catch 문을 이용해서 명시적으로 에러 발생 시킴
            throw Error("Unexpected Error"); //throw error를 통해서 명시적으로 에러 발생. 자연스럽게 catch error로 에러가 넘어감.
        } catch (error) {
            setError(error); //state에 대한 set함수로 error가 넘어감.
        }
    };
    if(error) { //에러가 있는경우에는 에러메세지 출력. 에러가 있는 경우 없는 경우를 따져서 에러를 핸들링 가능.
        return <span>Caught an error.</span>;
    }
        return <button onClick={handleClick}>Click Me To Throw Error</button>;
};
export default Mybutton;