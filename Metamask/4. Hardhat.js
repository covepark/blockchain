//#Hardhat이란
//- 이더리움 개발 환경, 컨트랙트를 배포하거나 테스팅하는데 최적화된 유틸 소프트웨어

//#Hardhat Scaffold
//- hardhat을 기본적으로 제공해주는 템플릿을 지칭
//- $npx hardhat을 입력 시 자동적으로 scaffold 실행

//#Compile & testing
//- $npx hardhat
//- $npx hardhat compile
//- $npx hardhat test

//- Contract를 배포하기 위한 파일은 script에 위치
//- test파일은 contract를 테스트하기 위함임.
//- Hardhat_config.js는 하드햇에 관련된 구성요소 조절
//- package.json은 우리가 설치한 파일들. 
//- artifact 추후에 프론트엔드에서 접근할 수 있는 일종의 매개체 역할
//- Lock.json -> lock.sol의 변환 하드햇을 통해 compile후 json형태로 나열할 수 있음