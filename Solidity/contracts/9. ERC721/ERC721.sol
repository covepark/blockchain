//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC721{

    string private _name;
    string private _symbol;

    mapping(uint256 => string) private _tokenInfo;
    mapping(uint256 => address) private _owners;
    mapping(uint256 => address) private _tokenApprovals;

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    uint private totalSupply;
    address private manager;

    event Transfer(address from, address to, uint tokenId);
    event Approval(address from, address to, uint tokenId);
    event ApprovalForAll(address from, address to, bool approval); //Opensea와 같은 판매 사이트에서 내 NFT를 누구에게나 보낼 수 있는 권한이 필요하기 때문에

    constructor(string memory name_, string memory symbol_){
        _name = name_;
        _symbol = symbol_;
        manager = msg.sender;
    }

    modifier Onlyowner(uint256 tokenId) {
        require(msg.sender == _owners[tokenId], "Not allowed");
        _;
    }

    modifier Onlymanager() {
        require(msg.sender == manager, "Not allowed");
        _;
    }




    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        return _owners[tokenId];
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return _tokenInfo[tokenId];
    }

    function getApproved(uint256 tokenId) public view returns (address) {
        return _tokenApprovals[tokenId];
    }

    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public {
        require(from == _owners[tokenId], "Not Approved");
        require(isApprovedForAll(_owners[tokenId], msg.sender) || getApproved(tokenId) == msg.sender, "Not Approved");
        delete _tokenApprovals[tokenId];

        _balances[from] -=1;
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(from, to, tokenId);        
    }

    function mint(address to, uint256 tokenId, string memory url) public Onlymanager{
        _balances[to] += 1;
        _owners[tokenId] = to;
        _tokenInfo[tokenId] = url;
        totalSupply += 1;
        emit Transfer(address(0), to, tokenId);
    }

     function burn(uint256 tokenId) public Onlyowner(tokenId) {
        address owner = _owners[tokenId];
        delete _tokenApprovals[tokenId];
        _balances[owner] -= 1;
        delete _owners[tokenId];
        emit Transfer(owner, address(0), tokenId);
    }

     function transfer(
        address to,
        uint256 tokenId
    ) public {
        require(_owners[tokenId] == msg.sender, "Incorrect Owner");
        delete _tokenApprovals[tokenId];

        _balances[msg.sender] -=1;
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(msg.sender, to, tokenId);
    }

    function approve(address to, uint256 tokenId) public{
        require(_owners[tokenId] == msg.sender, "Incorrect Owner");
        _tokenApprovals[tokenId] = to;
        emit Approval(_owners[tokenId], to, tokenId);
    }

    function setApprovalForAll( //특정 거래소에 내 NFT의 이동권한을 넘겨줌.
        address owner,
        address operator,
        bool approved
    ) public {
        require(msg.sender == owner, "Incorrect Owner");
        _operatorApprovals[owner][operator] = approved;
        emit ApprovalForAll(owner, operator, approved);
    }

}