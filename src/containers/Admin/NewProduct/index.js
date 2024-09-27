import React from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Conteiner, Label, Input, ButtonStyles } from './styles'

function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Conteiner>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>upload da imagem</Label>
        <Input type="file" accept="image/png,image/jpeg" />

        <ReactSelect />

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Conteiner>
  )
}
export default NewProduct
