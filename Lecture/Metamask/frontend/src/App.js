import './App.css';
import { Connect} from './9. Components/9-1. Connect';
import styled from 'styled-components';
import { WalletStatus } from './9. Components/9-2. WalletStatus';
import { SignMessage } from './9. Components/9-3. SignMessage';
import { ContractCall } from './9. Components/9-4. ContractCall';

const StyledAppDiv = styled.div`
  display: grid;
  grid-app: 20px;
`

function App() {
  return (
    <StyledAppDiv>
      <Connect />
      <WalletStatus />
      <SignMessage />
      <ContractCall />
    </StyledAppDiv>
  );
}

export default App;
