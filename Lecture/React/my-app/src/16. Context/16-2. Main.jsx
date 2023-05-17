import React, { useContext } from "react";
import ThemeContext from "./16-1. ThemeContext";
import styled from 'styled-components';

const Wrapper = styled.div`
    backgroundColor: theme === "light" ? '#fff' : '#000';
    color: ${props => props.theme === 'light' ? 'blue' : 'red'};
    display: flex;
    justify-content: space-around;
`

function Main(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);
        return (
        <Wrapper theme={theme}>
            <h3>Main</h3>
            <buttion onClick={toggleTheme}>Toggle Theme</buttion>
        </Wrapper>
      );
  }   
    
// return (
//         <div style={{
//             backgroundColor: theme === "light" ? '#fff' : '#000',
//             color: theme === "light" ? '#000' : '#fff'
//         }}>
//             <h3>Main</h3>
//             <buttion onClick={toggleTheme}>Toggle Theme</buttion>
//         </div>
//     );
// }

export default Main;