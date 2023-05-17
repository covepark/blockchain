//#Element
//- Google devtools을 이용하면 html에 안에 여러 element의 목록들 확인 가능
//- 하나의 HTML의 요소의 작은 블록들을 지칭
//- React element는 Virtual DOM에 존재하는 element 의미
//- Javascript 객체 형태로 존재하며 한번 생성되면 바꿀 수 없는 불변성이 있음.
//- Element를 업데이트 하기 위해서는 element를 다시 생성해야함.

//Javascript Object 객체
{
    type: 'button',
    props: {
        className: 'btn-white',
        children: {
            type: 'p',
            props: {
                children: 'Button'
            }
        }
    }
}

//HTML로 변환
>> <button class = 'btn-white'>
    <p> Button </p>
</button>

//#Element 렌더링
<div id="root"></div> //- Root DOM node: 단 하나의 노드를 가짐

//element를 생성하고 root DIV에 rendering하는 코드
const elem = <p>Hello</p> //Virtual DOM에 존재
ReactDom.render(elem, document.getElementById('root')); //(virtualDOM, HTML rendering하는 실제 브라우저의 DOM), 가상DOM과 실제 브라우저의 DOM을 연결