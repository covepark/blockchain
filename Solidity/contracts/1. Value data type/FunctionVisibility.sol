//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract FunctionVisibility{

    uint8 private data = 255; //컨트랙트 내에서만 조회 가능, 외부에서 조회 안됨.
    uint8 public data1 = 255; //외부에서 누구든지 조회 가능

    //외부 공개 X, 상속된 ca X, 내부에서 O
    function setData(uint8 _data) private {
        data = _data;
    }

    //외부 공개 X, 상속된 ca O, 내부에서 O
    function setData1(uint8 _data) internal {
        data = _data;
    }

    //외부 공개 O, 상속된 ca O, 내부에서 O
    function setData2(uint8 _data) public {
        data = _data;
    }

    //외부 공개 O, 상속된 ca X, 내부에서 X
    function setData3(uint8 _data) external {
        data = _data;
    }

}

