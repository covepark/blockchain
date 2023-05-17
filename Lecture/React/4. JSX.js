//#JSX
//- Javascript + XML/HTML의 합성어
//- Javascript 확장 문법

const elem = <p>Hello World</p>

function calculate(a, b){
    return a+b;
}

const elem1 = (
    <h2> Sum: {calculate(1,2)}</h2>
);

ReactDOM.render(
    elem1,
    document.getElementByld('root')
);

