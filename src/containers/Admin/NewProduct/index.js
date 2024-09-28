import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import ReactSelect from 'react-select'
import * as Yup from 'yup'

import { ErrorMensage } from '../../../components'
import api from '../../../services/api'
import { Conteiner, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o Preço do produto'),
    category: Yup.string().required('Escolha uma categoria')
    // file: Yup.file().required('Envie uma imagem')
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const {
    field: selectField // Usando `field` para conectar o ReactSelect
  } = useController({
    name: 'category_id', // Nome do campo
    control
  })

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data.categories)
    }
    loadCategories()
  }, [])

  return (
    <Conteiner>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />
        <ErrorMensage>{errors.name?.message}</ErrorMensage>

        <Label>Preço</Label>
        <Input type="text" {...register('name')} />
        <ErrorMensage>{errors.name?.message}</ErrorMensage>
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
        <ErrorMensage>{errors.file?.message}</ErrorMensage>

        <ReactSelect
          {...selectField}
          options={categories}
          getOptionLabel={(category) => category.name}
          getOptionValue={(category) => category.id}
          placeholder="Categorias"
        />
        <ErrorMensage>{errors.category?.message}</ErrorMensage>

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Conteiner>
  )
}
export default NewProduct
