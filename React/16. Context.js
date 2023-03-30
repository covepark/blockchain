//#컨택스트란
//- 컴포넌트 트리를 통해서 곧바로 컴포넌트에 전달할 수 있는 브로드 캐스트 방식
//- 기존에는 왼쪽에 보이는 그림과 같이 props를 통해서 데이터가 부모에서 자식으로 단반향으로 전달되었음.
//- 예를 들어, Root DOM의 데이터를 가장 하단의 자식으로 전달하기 위해서는, props 데이터를 전달해야하는데, Root->자식->자식의 자식의 형태로 단반향 전달이었음.
//- 전달하는 데이터가 많이지고, 컴포넌트가 많이짐에 따라 코드가 복잡해지는 단점 존재.
//- 이를 해결하기 위해서, Context 등장. 곧 바로 데이터 전달 가능


//#언제 주로 사용할까
//1. 로그인 정보
//
//2. 언어 및 테마와 같은 전역 정보
//3. 월렛 프로바이더
//- 컨트랙트 연동 시에 월렛과 연동해야하기 때문에 자주 접근해야 하는 데이터 임.
//4. 공통 모달 다이얼로그, 에러 메세지 등의 UI라이브러리
//- 해당되는 액션을 위해서 모달을 띄운다던지, API query이나 다양한 메세지를 통해서 에러 메세지를 띄운다고 했을 때, 이에 대해서 공통된 모드를 화면에 표시해야하기 떄문에 context를 활용하여 손쉽게 구현 가능

//#Provider/Consumer 컴포넌트
//- Context.provide 컴포넌트로 하위 컴포넌트를 감싸주면 모든 하위 컴포넌트들이 해당 데이터에 접근 가능
const ModeContext = React.createContext('light'); //기본 값으로 createContext를 통해서 light라는 기본 값을 가지고 context 객체를 만듦.
function App() {
    return (
        <ModeContext.Provider value="dark"><MyButtton/></ModeContext.Provider> //Mybutton이라는 컴포넌트를 modecontext.provider로 감싸줌. value는 하위 컴포넌트를 브로드캐스트 하기 위한 일종의 value. 상위에서 dark라는 값을 mybutton에 건내주는 형태.
    );
}
function MyButton(props) {
    return <ModeButton/>;
}
function ModeButton(props){
    return (
        <ThemeContext.Consumer> {//Context 컴포넌트로 감싸줌. 감싸주면 해당 버튼에서 앞서 프로바이더에서의 'dark'라는 값을 가져올 수 있는 거임.
                                }
            {value => <Button mode={value} />}  {//dark가 될 것
                                                }
        </ThemeContext.Consumer>
    );
}

//#useContext
export const ModeContext1 = React.createContext('light');

function ModeButton1(props){
    const mode = useContext(ModeContext); //useContext 훅을 사용. 매번감싸주는 것 보다 훅을 사용하여 컨택스트에 쉽게 접근 가능. useContext에 해당하는 Modecontext를 넣어주고 이를 넘겨주는 되는 것임.
    return (
        <Button mode={mode} />
    );
}