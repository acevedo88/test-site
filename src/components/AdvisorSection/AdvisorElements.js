import styled from "styled-components";

export const AdvisorContainer = styled.div` 
    background-color: #333;
    display: flex;
    justify-content: center;
    padding: 0 10px;
    padding-top: 75px;
    height: 720px;
    z-index: 1;

    @media screen and (max-width: 1300px){
        height: 1190px;
    }

`

export const AdvisorContent = styled.div` 
    z-index: 1;
    justify-content: center;
    max-width: 1200px;
    position: absolute;
    padding: 8 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AdvisorH1 = styled.h1`    
    color: white;
    font-size: 48px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const AdvisorInfo = styled.div` 
    padding-top: 35px;
    display: flex;
    flex: 1 0 10%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1.5em;
`