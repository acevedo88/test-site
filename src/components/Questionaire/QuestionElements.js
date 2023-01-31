import styled from "styled-components";


export const QuestionContainer = styled.div` 
    background: #333;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 650px){
        height: 500px;
    }
`