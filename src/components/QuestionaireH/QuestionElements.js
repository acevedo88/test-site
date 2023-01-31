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

export const QuestionWrapper = styled.div` 
    max-width: 1200px;
    position: absolute;
    padding: 8 24px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const QuestionH1 = styled.h1` 
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 650px){
        font-size: 24px;
    }
`

export const QuestionH2 = styled.h2` 
    color: #fff;
    font-size: 32px;
    text-align: center;
    margin-top: 45px;

    @media screen and (max-width: 768px){
        font-size: 28px;
    }

    @media screen and (max-width: 650px){
        font-size: 18px;
    }
`

export const Form = styled.form` 
    display: flex;
    flex-direction: row;
    margin-top: 75px;
    margin-bottom: 60px;
`
export const InputWrapper = styled.div` 

`

export const Label = styled.label` 
    font-size: 22px;
    color: white;
    margin-right: 15px;
`

export const Input = styled.input` 
    box-sizing: border-box;
    padding: 8px 20px;
    margin-right: 20px;
`