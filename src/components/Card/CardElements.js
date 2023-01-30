import styled from "styled-components";

export const CardContainer = styled.div` 
    color: 'white';
    background: ${({lightBg}) => (lightBg ? '#32546d' : '#32546d')};
`

export const CardWrapper = styled.div` 
    display: grid;
    z-index: 1;
    height: 440px;
    width: 100%;
    max-width: 240px;
    padding: 0 24px;
    justify-content: center;

`

export const Img = styled.img` 
    width: 200px;
    height: 200px;
    margin: 10px 0 10px 4px;
    padding-right: 0;
`

export const CardH1 = styled.h1` 
    color: white;
    font-size: 22px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 22px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const CardP1 = styled.p` 
    color: white;
    font-size: 18px;
    text-align: center;
    max-width: 1200px;
    padding-top: 14px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`
export const CardEmail = styled.p` 
    color: white;
    font-size: 18px;
    text-align: center;
    max-width: 1200px;
    padding-top: 10px;
    text-decoration: underline;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`