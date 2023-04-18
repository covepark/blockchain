//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ERC20{

    mapping(address => uint) public _balances;
    mapping(address => mapping(address =>uint)) private _allowances; //사용자가 내 돈을 다른 사용자한테 이동할 수 있는 권한을 주는 함수
    uint private _totalSupply;
    string private _name; //Ethereum
    string private _symbol; //ETH
    uint8 private _decimals; //ETH의 경우 18진수 사용, in case of Tether, 6.

    event Transfer(address indexed from, address indexed to, uint amount); //기록, 누가 누구에게 얼마나 보냈는가. //indexed: 인수 앞에 indexed라는 키워드를 붙여서 애플리케이션에서 검색하거나 필터링할 수 있음. 인덱싱된 테이블(해시 테이블)의 값으로 만들 수 있음.
    event Approval(address indexed from, address indexed to, uint amount);

    modifier checkBalance(uint amount){
        require(_balances[msg.sender] > amount, "Not Sufficient Balance");
        _;
    }

    constructor(string memory _name_, string memory _symbol_, uint8 _decimals_){
        _name = _name_; 
        _symbol = _symbol_;
        _decimals = _decimals_;
        _totalSupply = 1000000 * (10**18);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function allowance(address owner_, address spender) public view returns (uint256) {
        return _allowances[owner_][spender];
    }
    
    //address from을 추가하게되면 from 주소에 다른 사람의 주소를 쓸 수 있게 됨. 공격 취약점 발생. 변조할 수 없는 msg.sender를 사용.
    //payable은 이더를 보낼 때만 사용하면 됨.
    function transfer(address to, uint256 amount) public checkBalance(amount) returns (bool) {
        _balances[msg.sender] -= amount; //payable은 이더를 보낼 때만 사용하면 됨.
        _balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public checkBalance(amount) returns (bool) {
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender,spender,amount);
        return true;
    }

    function transferFrom( //이사람이 저사람에게 돈을 보내줘. 돈을 받는 사람이 일반적으로 호출하게됨.
        address from,
        address to,
        uint256 amount
    ) public returns (bool) {
        require(_balances[from] > amount, "Not Sufficient Balance");
        require(_allowances[from][to] > amount, "Not Sufficient Balance");
        require(to == msg.sender, "Not Allowed User");
        _balances[from] -= amount;
        _balances[to] += amount;
        emit Transfer(from, to ,amount);
        return true;
    }
}