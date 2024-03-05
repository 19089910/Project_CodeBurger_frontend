import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginBanner from '../../assets/login-banner.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SingInLink,
  ErrorMensage
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatorio'),
    password: Yup.string()
      .required('A senha é obrigatoria')
      .min(6, 'A senha deve ter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (clientData) => {
    await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'verificando seus dados',
        success: 'Seja bem-vindo',
        error: 'virifique seu e-mail e senha'
      }
    )
    // await console.log(response) // respondeu
  }

  return (
    <Container>
      <LoginImage src={LoginBanner} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMensage>{errors.email?.message}</ErrorMensage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMensage>{errors.password?.message}</ErrorMensage>

          <Button style={{ marginTop: 75, marginBottom: 25 }} type="submit">
            Sign In
          </Button>
        </form>
        <SingInLink>
          Nâo possui conta ? <a>Sign Up</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
