//TypeScript{ES6{ES5}}: TypeScript는 ES6을 포함하고, ES6은 ES5를 포함함.
//TypeScript: MicroSoft에서 개발하고 관리하는 오픈소스 언어로, 어떤 브라우저나 호스트, 운영체제에서 동작함. ES6의 최신 표준을 지원함
//TypeScript: -types, -annotations
//ES6: -classes, -modules

//TypeScript의 장점
//1. 정적타입
//- 컴파일 단계에서 오류 포착 가능
//- 명시적인 정적 타입은 개발자의 의도 파악을 쉽게 함
//- 디버깅도 쉽게 진행 가능
function sum(a:number, b:number){
    return a+b;
}

sum('x','y');

//2.다양한 도구의 지원
//- IDE(visual studio 등) 지원 및 다양한 도구의 지원 가능
//- 다양한 플러그인을 통한 Type 정보 제공으로 높은 수준의 code assist 가능, 생산성 향상

//3.객체지향 프로그래밍 지원
//- Interface generic 등 강력한 객체 지향 프로그래밍 지향
//- 큰 규모의 복잡한 프로젝트를 쉽게 구성할 수 있도록 도와줌
//- Java, C, C# 등 class 기반 객체 지향 언어에 익숙한 개발자들이 Javascript에 진입하는 장벽을 낮춰줌

//예제
export class Person{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}

import { Person } from './person';

class Student extends Person {
    exam(): string { //'exam' method를 만들어서 반환값을 string으로 정의 가능.
        return `${this.name}'s eaxm`;
    }
}

const student = new Student('Mike');

console.log(student.sayHello());
console.log(student.exam());