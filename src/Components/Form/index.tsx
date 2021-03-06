import { Form, Button, Input, ErrorImage } from "./style";
import ErrorMessage from "../../Assets/Images/erro.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "../../Interfaces";
import { useUser } from "../../Providers/UserProvider";

const LoginForm = () => {
  const { login } = useUser();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email e/ou senha inválidos."),
    password: yup.string().required("Email e/ou senha inválidos."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(formSchema) });

  const handleLogin = ({ email, password }: FormData) => {
    const loginData = { email: email, password: password };
    login(loginData);
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <Input placeholder="Email" type="email" {...register("email")} />
      <Input placeholder="Senha" type="password" {...register("password")} />
      <Button type="submit">Entrar</Button>
      {errors.email && <ErrorImage alt="error-message" src={ErrorMessage} />}
    </Form>
  );
};
export default LoginForm;
