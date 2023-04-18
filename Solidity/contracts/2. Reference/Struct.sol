//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Struct{ //대문자 시작

    struct Product{
        string name;
        uint price;
    }

    Product public mainProduct;
    uint public maxProductCount;

    constructor(){ //최초 값 세팅
        maxProductCount = 1000;
    }

    function initProduct() public{ //구조체 초기값 세팅 방법1
        Product memory firstProduct;
        firstProduct = Product("toy1",10);
    }

    function setMainProduct(string memory _name, uint _price) public{ //구조체 초기값 세팅 방법2
        mainProduct.name = _name;
        mainProduct.price = _price;
    }

    function getMainProduct() public view returns(uint){ 
        return mainProduct.price;
    }
    
}