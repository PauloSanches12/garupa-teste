import React, { useCallback, useState } from 'react';
import ButtonContainer from '../../components/Button';
import ListData from '../ListData';
import { ContainerLogin, TextLogin, ContainerForm, Label, Input, Form } from './styles';

interface InputProps {
  email: string;
  password: string
}

function Login() {
  const [values, setValues] = useState<InputProps>({
    email: "",
    password: ""
  })

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

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

      setIsLoggedIn(false);

      return;
    }

    setIsLoggedIn(true);
  }, [values])
  
  if (isLoggedIn) {
    return (
      <ListData />
    )
  }

  return (
    <ContainerLogin>
      <TextLogin>Fazer Login</TextLogin>
      <Form onSubmit={HandleSubmit}>
        <ContainerForm>
          <Label>E-mail</Label>
          <Input id='email' type="email" name='email' onChange={handleForm} value={values.email} />
        </ContainerForm>

        <ContainerForm>
          <Label>Senha</Label>
          <Input id='password' type="password" name='password' onChange={handleForm} value={values.password} />
        </ContainerForm>
          <ButtonContainer>
            Entrar
          </ButtonContainer>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
