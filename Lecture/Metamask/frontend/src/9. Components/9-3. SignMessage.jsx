import { useWeb3React } from "@web3-react/core";
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: blue;
    cursor: pointer;
`;

export function SignMessage() {
    const { account, active, library} = useWeb3React()

    function handleSignMessage(event) {
        event.proventDefault();

        if(!library || !account) {
            return;
        }

        async function signMessage(library, account) {
            try {
            const signature = await library.getSigner(account).signMessage('Hello FastCampus')
            window.alert('Success' + signature)
            } catch(error){
                window.alert('Error' + (error && error.message ? `${error.message}` : ``))
            }
        }

        signMessage(library, account);
    }

    return(
        <StyledButton
            disabled = {active ? false : true}
            onClick={handleSignMessage}
        >Sign Message</StyledButton>
    )

}