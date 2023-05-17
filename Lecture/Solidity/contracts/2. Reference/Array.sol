//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Array{
    
    uint256[] public intList = [1,2,3,4];
    uint[3] public intList1 = [1,2,3];
    uint[3] public intList2 = [1,2,3];

    function push(uint _y) public { 
        intList.push(_y);
    }

    function pop() public {
        intList.pop();
    }

    function getdata(uint _x) public view returns(uint){
        return intList[_x];
    }


//------------reference------------//
    uint256[] public ageArray;
    uint256[10] public ageFixedSizeArray;
    string[] public nameArray= ["Kal","Jhon","Kerri"];
  
    function AgeLength()public view returns(uint256) {
        return ageArray.length;
    }
    function AgePush(uint256 _age)public{
        ageArray.push(_age);
    }
    function AgeChange(uint256 _index, uint256 _age)public{
        ageArray[_index] = _age;
    }
    function AgeGet(uint256 _index)public view returns(uint256){
        return ageArray[_index];
    }
    function AgePop()public {
        ageArray.pop();
    }
    function AgePop(uint256 _index)public {
        delete ageArray[_index];
    }

}


