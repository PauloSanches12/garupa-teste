import styled from 'styled-components';

export const ContainerLogin = styled.div`
    background-color: #FFF;
    padding: 30px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
`;

export const TextLogin = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #47474D;
`

export const ContainerForm = styled.div`
    text-align: left;
`

export const Form = styled.form`
    margin-top: 15px;
`

export const Label = styled.label`
    display: block;
    font-weight: bold;
    color: #34CB79;
`

export const Input = styled.input`
    margin-bottom: 20px;
    margin-top: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 340px;
    transition: 0.3s;
    
    &:hover{
        border: 1px solid #34CB79;
    }
`