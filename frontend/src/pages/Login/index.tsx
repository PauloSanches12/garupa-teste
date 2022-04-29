import { useState } from 'react';
import ButtonContainer from '../../components/Button';
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

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,

    })
    console.log(event.target.value)
  }
  return (
    <ContainerLogin>
      <TextLogin>Fazer Login</TextLogin>
      <Form>
        <ContainerForm>
          <Label>E-mail</Label>
          <Input id='email' type="email" name='email' onChange={handleLogin} value={values.email} />
        </ContainerForm>

        <ContainerForm>
          <Label>Senha</Label>
          <Input id='password' type="password" name='password' onChange={handleLogin} value={values.password} />
        </ContainerForm>
        <ButtonContainer>
         Entrar
        </ButtonContainer>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
