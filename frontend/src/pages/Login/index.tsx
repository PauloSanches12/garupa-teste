import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authGoogle from '../../firebase/firebase';
import { 
  ContainerLogin, 
  TextLogin, 
  ContainerForm, 
  Label, 
  Input, 
  Form, 
  ButtonContainer, 
  ImageContent,
  Span,
  ButtonImageContent,
  InputImage } from './styles';

import logoGoogle from "../../assets/logo.png";

interface InputProps {
  email: string;
  password: string
}

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState<InputProps>({
    email: "",
    password: ""
  })

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    setValues({
      ...values,
      [name]: value,

    })
  }

  const HandleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const { email, password } = values;

    if (!email || !password) {
      alert("Preencha todos os campos!");

      return;
    }
    
    navigate("/beer-list");
  }, [values])

  const signInWithGoogle = async () => {
    
    if (await authGoogle()){
      navigate("/beer-list")
    } else {
      alert("Erro na autenticação!")
    }
  }

  return (
    <ContainerLogin>
      <TextLogin>Fazer Login</TextLogin>
      <Form onSubmit={HandleSubmit}>
        <ContainerForm>
          <Label>E-mail</Label>
          <Input 
            type="email" 
            name='email' 
            placeholder='exemplo@exemplo.com' 
            onChange={handleForm} 
            value={values.email} 
            required 
          />
        </ContainerForm>

        <ContainerForm>
          <Label>Senha</Label>
          <Input 
            type="password" 
            name='password' 
            placeholder='senha' 
            onChange={handleForm} 
            value={values.password} 
            required 
          />
        </ContainerForm>
          <ButtonContainer>
            Entrar
          </ButtonContainer>
      </Form>
        <ImageContent>
          <Span>Login com o Google</Span>
          <ButtonImageContent onClick={signInWithGoogle} type='button'>
            <InputImage 
              type="image" 
              placeholder="Login com o Google" 
              src={logoGoogle} 
            />
          </ButtonImageContent>
        </ImageContent>
    </ContainerLogin>
  );
};

export default Login;
