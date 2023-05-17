//#Props -> Component -> React Element
//#Props
//- Read only
//- 같은 props가 들어오면 같은 element를 리턴함.
<MyProfile name="Will" gender="male" areaCode={123}/> //따옴표는 문자열인경우, 문자열 이외의 정수, 변수, 컴포넌트의 경우 중괄호 사용 필요.

{
    name: "Will",
    gender: "male",
    areaCode: 123
}

//#Component
//- Class component와 Function component
//- 초기에는 클래스 컴포넌트를 사용했으나 훅이 들어오면서 요즘에는 함수형 컴포넌트를 많이 사용하는 추세

//#Class component
class Hello extends ReadableByteStreamController.Component {
    render(){
        return <p>Hello {this.props.name}</p>
    }
}

<Hello name="Will"/> //Hello 컴포넌트를 참조하는 방법

//#Function component
//-Class component 보다 조금더 간단함
function Hello(props){
    return <p>Hello, {props.name}</p>
}

<Hello name="Will"/> //Component는 항상 대문자로 시작해야함.

//#Component 합치기
function App(props){
    return (
        <div>
            <Hello name="Will"/>
            <Hello name="Kate"/>
            <Hello name="Matt"/>
        </div>
    )
}

//#Component 분리
function MyProfile(props) {
    return (
    <div>
        <img src ={props.user.picProfile} alt={props.user.name} />
        <p>
            {props. user.name}
        </p>
    </div>
    )
}


//개별적으로 Pic이라는 컴포넌트를 생성할 수 있음
//추후에 재사용 가능, 가독성 향상
function Pic(props) {
    return (
        <img src={props.user.picProfile} alt={props.user.name} />
    )
}

//img대신 Pic이라는 컴포넌트를 불러와 배치 가능
function MyProfile(props) {
    return (
    <div>
        <Pic user={props. user} />
        <p>
            {props.user.name}
        </p>
    </div>
    )
}
