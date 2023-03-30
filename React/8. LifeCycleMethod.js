//LifeCycleMethod
//#Mount
//- Component의 탄생
//- constructor를 실행
//- componentDidMount가 호출됨.

//#Updating
//- Props가 변경되거나, setState()함수가 호출되어 state가 변경되거나, forceUpdate()라는 강제 업데이트 함수로 인해 컴포넌트가 re-rendering 될 경우에 이를 업데이트하고, 이후에 componentDidUpdate함수 호출

//#Unmounting
//- Mounting과 반대로 현재 컴포넌트를 더 이상 화면에 표시하지 않을 때, componentWillUnmount 사용

//#컴포넌트가 계속 살아있는 것이 아닌 생성과 소멸의 라이프사이클을 가지게 된다는 것을 기억하자.
//#클래스 컴포넌트, 함수 컴포넌트 마찬가지임.

//#React developer tools
//- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
//- React component를 간편하게 확인할 수 있고, props, hooks, state 정보를 확인할 수 있음.
