//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ERC20{


    mapping(address => uint) public _balances;
    mapping(address => mapping(address =>uint)) private _allowances; //사용자가 내 돈을 다른 사용자한테 이동할 수 있는 권한을 주는 함수
    uint private _totalSupply;
    string private _name; //Ethereum
    string private _symbol; //ETH
    uint8 private _decimals; //ETH의 경우 18진수 사용, in case of Tether, 6.
    address public owner;

    mapping(address => bool) private _blackList;

    modifier checkBlakcList(){
        require(!_blackList[msg.sender],"Banned user");
        _;
    }

    event Transfer(address indexed from, address indexed to, uint amount); //기록, 누가 누구에게 얼마나 보냈는가.
    event Approval(address indexed from, address indexed to, uint amount);

    modifier checkBalance(uint amount){
        require(_balances[msg.sender] > amount, "Not Sufficient Balance");
        _;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only Owner");
        _;
    }

    constructor(string memory _name_, string memory _symbol_, uint8 _decimals_){
        _name = _name_; 
        _symbol = _symbol_;
        _decimals = _decimals_;
        _totalSupply = 1000000 * (10**18);
        owner = msg.sender;
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

    function transfer(address to, uint256 amount) public checkBalance(amount) checkBlakcList returns (bool) { //address from을 추가하게되면 from 주소에 다른 사람의 주소를 쓸 수 있게 됨. 공격 취약점 발생. 변조할 수 없는 msg.sender를 사용해야함.
        _balances[msg.sender] -= amount;
        _balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
        return true;
    }


    function approve(address spender, uint256 amount) public checkBalance(amount) checkBlakcList returns (bool) {
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender,spender,amount);
        return true;
    }

    function mint(address to,uint amount) public onlyOwner{
        _balances[to] = amount;
        _totalSupply += amount;
    }

    function burn(address to, uint amount) public onlyOwner{
        _balances[to] -= amount;
        _totalSupply -= amount;
    }

    function burnByUser(uint amount) public{
        transfer(address(0), amount);
        _totalSupply -= amount;
    }

    function setBlackList(address to) public onlyOwner{
        _blackList[to] = true;
    }

    function transferFrom( //이사람이 저사람에게 돈을 보내줘~
        address from,
        address to,
        uint256 amount
    ) public checkBlakcList returns (bool) {
        require(_balances[from] > amount, "Not Sufficient Balance");
        require(_allowances[from][to] > amount, "Not Sufficient Balance");
        require(to == msg.sender, "Not Allowed User");
        _balances[from] -= amount;
        _balances[to] += amount;
        emit Transfer(from, to ,amount);
        return true;
    }
}