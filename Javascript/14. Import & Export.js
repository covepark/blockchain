//모듈 익스포트(Module export)
export {val}; //변수 한 개 익스포트
export {val1, val2, val3}; //변수 여러 개 익스포트
export {val as myval}; //해당 변수를 alias로 익스포트한다
export {val1, val2} from "otherMoudle"; //하위 모듈에서 해당 익스포트 된 변수를
export * from "otherMoudle"; //하위 모듈에서 익스포트 한 모든 변수를 익스포트

//모듈 임포트(Module Import)
import {val1, val2} from "myModule"; //기본 임포트
import {val as myVal} from "myModule"; ///임포트 할 변수를 다른 변수로 alias
import * as val from "myModule"; //변수 전체를 임포트 한 뒤 val 변수로 alias

