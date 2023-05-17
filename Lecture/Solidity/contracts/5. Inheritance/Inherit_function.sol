//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Car{
    
    string private type_;
    uint8 private door;

    constructor(string memory _type, uint8 _door){
        type_ = _type;
        door = _door;
    }

    function getDoor() public view returns(uint8){
        return door;
    }

}

contract Benz is Car("SUV", 4){
    string private model;
    address private owner;

    constructor(string memory _model){
        model = _model;
        owner = msg.sender;
    }

    function getModel() public view returns(string memory){
        return model;
    }

}

contract Audi is Car("Car", 5){
    string private model;
    address private owner;

    constructor(string memory _model){
        model = _model;
        owner = msg.sender;
    }

    function getModel() public view returns(string memory){
        return model;
    }


}