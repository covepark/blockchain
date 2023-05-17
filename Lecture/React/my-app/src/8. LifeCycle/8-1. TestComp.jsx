import React from "react";

class TestComp extends React.Component { //클래스 컴포넌트를 정의하는 기본적인 문구
    constructor(props) {
        super(props); //이를 통해 기본적인 생성자가 완성됨.

        this.state = {num : 0}
    }
    componentDidMount() {
        console.log('componentDidMount');

        this.setState({num :1})
    }
    componentDidUpdate() {
        console.log('componentDidupdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return(
            <div>
                Test Component
            </div>
        )
    }
}

export default TestComp;