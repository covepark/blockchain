//기본적인 구조도
//#Web3 React Provider
//1. Connect.tsx
//- 메타마스크를 통해서 네트워크를 연동하거나 disconnect할 수 있는 특징을 지닌 컴포넌트
//2. WalletStatus.tsx
//- 연결된 이후에 관련된 체인ID, account, balance, blocknumber 등 status를 반환하는 정보를 가진 컴포넌트
//3. SignMessage.tsx
//- 메세지를 signing하고 동작을 해주는 컴포넌트
//4. ContractCall.tsx
//- 컨트랙트를 배포하고 접근해서 컨트랙트에 대한 function을 콜하는 특징을 가진 컴포넌트