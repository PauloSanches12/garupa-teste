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
    color: #67676b;
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

    &::placeholder {
        font-size: 14px;
        color: #b0b0b0;
    }
`

export const ButtonContainer = styled.button`
    display: flex;
    cursor: pointer;
    background-color: #34CB79;
    border-radius: 5px;
    height: 50px;
    width: 340px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.015em;
    color: #FFF;
    text-decoration: none;

    &:hover {
        background-color: #1eba65;
    }
`;

export const ImageContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 5px;
`

export const Span = styled.span`
   color: #365265;
   font-weight: bold;
   padding: 15px 0 10px 0;
`

export const ButtonImageContent = styled.button`
   background: none;
`

export const InputImage = styled.input`
   width: 35px;
`