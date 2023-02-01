import styled from "styled-components";


export const QuestionContainer = styled.div` 
    background: #333;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 730px){
        height: 800px;
    }

    @media screen and (max-width: 680px){
        height: 1000px;
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

export const FormContainer = styled.div` 

`
export const InputSection = styled.div` 
        margin-top: 75px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
`

export const InputWrapper = styled.div` 
    margin-bottom: 40px;
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

export const SubmitWrapper = styled.div` 
    display: flex;
    justify-content: center;
    margin-top: 10px;

`

export const Submit = styled.input ` 
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#32546d' : '#A29587')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '18px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'white' : '#white')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#A29587' : '#32546d')};
    }
`