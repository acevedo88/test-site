import styled from "styled-components";

export const FounderContainer = styled.div` 
    background-color: #A29587;
    display: flex;
    justify-content: center;
    padding: 0 10px;
    padding-top: 75px;
    height: 720px;
    z-index: 1;
    @media screen and (max-width: 1300px){
        height: 1190px;
    }

    @media screen and (max-width: 772px){
        height: 1650px;
    }

    @media screen and (max-width: 503px){
        height: 2600px;
    }

`

export const FounderContent = styled.div` 
    z-index: 1;
    justify-content: center;
    max-width: 1400px;
    position: absolute;
    padding: 8 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FounderH1 = styled.h1`    
    color: black;
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

export const FounderP1 = styled.p` 
    margin-top: 20px;
    color: black;
    font-size: 24px;
    text-align: center;
    max-width: 1200px;
    padding-top: 30px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const FounderInfo = styled.div` 
    padding-top: 35px;
    display: flex;
    flex: 1 0 10%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1.5em;
`
