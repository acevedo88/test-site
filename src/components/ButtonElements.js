import styled from "styled-components";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const Button = styled(Link)` 
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#A29587' : '#32546d')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#01606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'white' : '#32546d')};
    }
`
export const PageButton = styled(LinkR)` 
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#32546d' : '#A29587')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '18px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'white' : '#32546d')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'green' : '#32546d')};
    }
`