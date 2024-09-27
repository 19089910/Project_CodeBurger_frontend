import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Conteiner, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
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

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png,image/jpeg"
            {...register('file')}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <ReactSelect />

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Conteiner>
  )
}
export default NewProduct
