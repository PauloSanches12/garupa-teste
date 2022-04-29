import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerLogin, TextLogin, ContainerForm, Label, Input, Form, ButtonContainer } from './styles';

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
