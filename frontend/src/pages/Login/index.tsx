import ButtonContainer from '../../components/Button';
import { ContainerLogin, TextLogin, ContainerForm, Label, Input, Form } from './styles';

function Login() {
  return (
    <ContainerLogin>
      <TextLogin>Fazer Login</TextLogin>
      <Form>
        <ContainerForm>
          <Label>E-mail</Label>
          <Input type="email" />
        </ContainerForm>

        <ContainerForm>
          <Label>Senha</Label>
          <Input type="password" />
        </ContainerForm>
        <ButtonContainer>
         Entrar
        </ButtonContainer>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
