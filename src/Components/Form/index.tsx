import { Form, Button, Input } from "./style";
const LoginForm = () => {
  return (
    <Form>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Senha" type="password" />
      <Button type="submit">Entrar</Button>
    </Form>
  );
};
export default LoginForm;
