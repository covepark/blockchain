import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import GreetingArtifact from '../artifacts/contracts/Greeting.sol/Greeting.json';
import styled from "styled-components";

const StyledDeployContractButton = styled.button`
    width: 180px;
    height: 2rem;
    border-radius: 1rem;
    border-color: blue;
    cursor: pointer;
    place-self: center;
`;

const StyledGreetingDiv = styled.div`
    dispaly: flex;
    gap: 10px;
    align-items: center;
`

const StyledLabel = styled.label`
    font-weight: bold;
`

const StyledButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: blue;
    cursor: pointer;
`;

export function ContractCall() {
    const {active, library} = useWeb3React()

    const [signer, setSigner] = useState();
    const [greetingContract, setGreetingContract] = useState();
    const [greetingContractAddr, setGreetingContractAddr] = useState('');
    const [greeting, setGreeting] = useState('');
    const [greetingInput, setGreetingInput] = useState('');

    useEffect(() => {
        if (!library) {
            setSigner(undefined);
            return;
        }

        setSigner(library.getSigner());
    }, [library])

    useEffect(() => {
        if(!greetingContract) {
            return;
        }

        async function getGreeting(greetingContract) {
            const _greeting = await greetingContract.greet();

            //새로운 문자열을 받아온다.
            if(_greeting !== greeting) {
            setGreeting(_greeting)
            }
        }

        getGreeting(greetingContract)
    }, [greetingContract, greeting])

    const handleDeployContract = (event) => {
        event.preventDefault();

        if (greetingContract) {
            return;
        }

        async function deployGreetingContract() {
            const Greeting = new ethers.ContractFactory(
                GreetingArtifact.abi,
                GreetingArtifact.bytecode,
                signer
            );

            try{
                const greetingContract = await Greeting.deploy('Hello, Fastcampus');
                //배포하기
                await greetingContract.deployed(); 
            
                //배포이후에 함수 호출하기
                const greeting = await greetingContract.greet();

                //배포한 컨트랙트 역시 setGreetingContract에 저장. 활성화/비활성화 요청 등에 쓰임
                setGreetingContract(greetingContract)
                setGreeting(greeting);
                //배포된 컨트랙트 주소 알 수 있음
                setGreetingContractAddr(greetingContract.address);
                window.alert(`Greeting deployed to : ${greetingContract.address}`)


            } catch(error) {
                window.alert('Error: ', (error && error.messsage ? `${error.message}` : ''))
            }
        }

        deployGreetingContract()
    }

    const handleGreetingChange = (event) => {
        event.preventDefault();
        setGreetingInput(event.target.value);
    }

    const handleGreetingSubmit = (event) => {
        EventTarget.preventDefault();

        if (!greetingContract){
            window.alert('Undefined Greeting Contract')
            return;
        }


        if(!greetingInput) {
            window.alert('Greeting cannot be empty')
            return;
        }

        async function submitGreeting(greetingContract) {
            try{
                const setGreetingTxn = await greetingContract.setGreeting(greetingInput);
                await setGreetingTxn.wait(); //트랜잭션 블록체인에 들어갈때 까지 기다리기

                const newGreeting= await greetingContract.greet(); //트랜잭션을 날릴 필요 없음
                window.alert(`Success :${newGreeting}`)

                if(newGreeting !== greeting) {
                    setGreeting(newGreeting)
                }
            } catch (error) {
                window.alert('Error: ', (error && error.messsage ? `${error.message}` : ''))
            }
        }

        submitGreeting(greetingContract);
    }



    return (
        <>
        <StyledDeployContractButton disabled={!active || greetingContract ? true: false} onClick={handleDeployContract}>Deploy Greeting Contract</StyledDeployContractButton>
        <StyledGreetingDiv>
            <StyledLabel>Contract Address</StyledLabel>
            <StyledLabel>{greetingContractAddr ? greetingContractAddr : 'Contract not yet deployed'}</StyledLabel>
        </StyledGreetingDiv>
        <StyledGreetingDiv>
            <StyledLabel>Greeting</StyledLabel>
            <StyledLabel>{greeting ? greeting : <>'Contract not yet deployed</>}</StyledLabel>
        </StyledGreetingDiv>
        <StyledGreetingDiv>
            <StyledLabel>Set new Greeting</StyledLabel>
            <input
                id="greetingInput"
                type="text"
                placeholder={greeting ? '':'Contract not yet deployed'}
                onChange = {handleGreetingChange}    
            />
            <StyledButton
                disabled={!active || !greetingContract ? true: false}
                onClick={handleGreetingSubmit}
            >Submit</StyledButton>
        </StyledGreetingDiv>
        </>
    )
}