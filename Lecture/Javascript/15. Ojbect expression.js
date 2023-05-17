//ES6에서는 좀 더 동적이고 간단한 객체 표현식 제공
//객체 표현식 : 객체 속성이름을 변수이름과 같도록 설정할 경우 이를 간단한 구문으로 표현할 수 있음.
const prop1 ="prop1"; //키와 값이 같음
const prop2 ="prop2"; //키와 값이 같음
const aObj = {
    prop1: prop1,
    prop2: prop2
};

const bObj = {
    prop1, //= "prop1" 생략
    prop2  //= "prop2" 생략
};

//함수를 정의할 때 func키워드를 생략하고 get, set 설정 가능
const aFunc = {
    func(){
        console.log("new function");
    },
    _name: "aFunc",
    get name(){
        return this._name;
    },
    set name(name) {
        this._name = name;
    }
};