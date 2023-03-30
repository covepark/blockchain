//#styled-components 설치
//- $npm install --save styled-components or $ yarn add styled-components

//#태그드 템플릿 리터럴
const <변수명> = styled.<HTML 태그>`
    padding: 10px;
    .......

`

//#styled-components
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
    background: grey;
`;

const NewText = styled.h2`
    color: ${props => props.dark ? "white":"black"};
`

function Main(props) {
    return(
        <Wrapper>
            <NewText>Text</NewText>
            <NewText dark>Text dark</NewText>
        </Wrapper>
    )
}