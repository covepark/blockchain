//#State
//- React component의 변경 가능한 데이터(상태)
//- State가 변경될 경우 컴포넌트가 Re-rendering
//- State역시 자바스크립트 객체
//- State는 렌더링이나 데이터 흐름에 사용되는 값만 포함시켜야 함. 이유는 이에 따라 다양한 성능저하가 발생할 수 있기 때문.

//#state-setState
//일반적으로 변수 다루듯이 직접적으로 수정할 수 없고(없다고 생각하고), Setstate를 통해서만 변경 가능.
//변경 시 re-rendering
this.state = {
    isTitle: false
};

this.Setstate({ //state의 값을 변경하기 위한 함수
    isTitle: true
})

