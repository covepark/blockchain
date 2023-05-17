import React, {useState} from "react";

function MyButton(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => { //명칭을 handle이라고 적는게 일반적
        console.log('handleClick');
        setIsClicked(true);
    }

    return (
        <div>
            <button onClick={handleClick} disabled={isClicked}>Button</button>  {//disabled: 버튼 상태를 비활성화 함.
                                                                                }
        </div>
    )
}

export default Mybutton;