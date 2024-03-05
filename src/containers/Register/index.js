import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterBanner from '../../assets/register-banner.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SingInLink,
  ErrorMensage
} from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatorio'),
    password: Yup.string()
      .required('A senha é obrigatoria')
      .min(6, 'A senha deve ter pelo menos 6 dígitos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatoria')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (clientData) => {
    try {
      const response = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      })
      await console.log(response)
    } catch (err) {}
  }

  return (
    <Container>
      <RegisterImage src={RegisterBanner} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMensage>{errors.name?.message}</ErrorMensage>

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

          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMensage>{errors.confirmPassword?.message}</ErrorMensage>

          <Button style={{ marginTop: 25, marginBottom: 25 }} type="submit">
            Sign up
          </Button>
        </form>
        <SingInLink>
          Já possui conta ? <a>Sign In</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Register
