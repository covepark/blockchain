//#이벤트 핸들러
function main(props){
    const [isClicked, setIsClicked] = useState(false);
    function handleClick(){
        setIsClicked(true);
    }
    const handleClick2 = (id, event) => {
        console.log(id, event.target);
    }
    return (
        <div>
            <p>{isClicked ? 'Clicked' : 'Not Clicked'}</p>
            <button onClick={handleClick}>Button</button>   {//버튼 클릭 시 handleClick함수 호출. setIsClicked를 사용하여 isClicked를 true로 바꿈
                                                            }
            <button onClick={(event) => handleClick2(2, event)}>Button2</button>    {//2, event인자를 handleClick2로 넘김. 
                                                                                    }
        </div>
    )
}