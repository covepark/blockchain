//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Math{

    function plusData(uint a, uint b) external pure returns(uint){
        return a+b;
    }

}

contract Trycatch{
    Math math = new Math(); //Math 컨트랙트 정보
    //address payable public temp_address = payable(0x851c312F78D02d53CCd036a37858AF1f6AE07c38);
    //일반적으로 쓸 수는 없고, 다른 함수를 호출을 했을 때만 쓸 수 있음.
    function callOtherContract(address payable to) external payable{
        try math.plusData(6,4) returns(uint result) {
            (to).transfer(result);
        }catch{
            revert();
        } //try-catch는 외부에서 다른 함수를 호출 했을 경우에만 에러 발생 여부를 확인 가능. 컨트랙트 내부에서 다른 함수를 호출할 때는 사용할 수 없음.
    }
}