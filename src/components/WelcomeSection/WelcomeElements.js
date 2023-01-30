import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const WelcomeContainer = styled.div` 
    background-color: #A29587;
    display: flex;
    justify-content: center;
    padding: 0 10px;
    padding-top: 75px;
    height: 900px;
    z-index: 1;
`

export const WelcomeContent = styled.div` 
    z-index: 1;
    justify-content: center;
    max-width: 1200px;
    position: absolute;
    padding: 8 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WelcomeH1 = styled.h1` 
    color: black;
    font-size: 48px;
    text-align: center;
    max-width: 400px;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const WelcomeH2 = styled.h1` 
    color: white;
    font-size: 38px;
    padding-top: 3rem;
    text-align: center;
    max-width: 400px;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const WelcomeP1 = styled.p` 
    margin-top: 24px;
    color: black;
    font-size: 24px;
    text-align: center;
    max-width: 650px;
    padding-top: 15px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const WelcomeBtnWrapper = styled.div` 
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 5em;
`

export const ArrowForward = styled(MdArrowForward)` 
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)` 
    margin-left: 8px;
    font-size: 20px;    
`