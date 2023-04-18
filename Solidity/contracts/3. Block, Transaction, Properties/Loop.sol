//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Loop{

    function forLoop() public pure returns(uint){
        uint8 sum = 0;
        for(uint i=1; i<11 ; i++){
            sum += 1; //1,2,3, ...., 10
        }
        return sum;
    }

    function whileloop() public pure returns(uint){
        uint8 sum = 0;
        uint8 i = 1;
        while(i<11){
            sum +=1; //1,2,3, ..., 10
            i++;
        }
        return sum;
    }

    function dowileloop() public pure returns(uint){
        uint8 sum = 0;
        uint i = 1;
        do{
            sum += 1;
            i++;
        }while(i<10);
        return sum; //1,2,3, ..., 9
    }

    function loopbreak() public pure returns(uint) {
        uint8 sum = 0;
        for(uint8 i=1; i<11 ; i++){
            sum += 1;
            if (sum>10) {
                break; //for 구문 중단 후 종료
            }
        }
        return sum;
    }

    function continuous() public pure returns(uint) {
        uint8 sum = 0;
        for(uint8 i=1; i<11 ; i++){
            if (i==5) {
                continue; //continue 실행 시 아래 구문은 skip하고 다시 for구문으로 돌아감.
            }
            sum += 1;
        }
        return sum;
    }

}