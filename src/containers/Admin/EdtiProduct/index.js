import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMensage } from '../../../components'
import api from '../../../services/api'
import { Conteiner, Label, Input, ButtonStyles, LabelUpload } from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o Preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', (value) => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue arquivos de até 2mg', (value) => {
        return value[0]?.size <= 200000
      })
      .test('type', 'Carregue apenas arquivos JPEG ou PNG', (value) => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // useController to use hooks-form with react-select
  const {
    field: selectField // Using `field` to connect or ReactSelect
  } = useController({
    name: 'category', // Field name
    control
  })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(
      api.post('products', productDataFormData), // Remova o await daqui
      {
        pending: 'Criando um novo produto...',
        success: 'Produto criado com sucesso!',
        error: 'Falha ao criar o produto!'
      }
    )
    setTimeout(() => {
      navigate('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data.categories)
    }
    loadCategories()
  }, [])

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMensage>{errors.name?.message}</ErrorMensage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMensage>{errors.price?.message}</ErrorMensage>
        </div>
        <div>
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
        </div>
        <div>
          <ReactSelect
            {...selectField}
            options={categories}
            getOptionLabel={(category) => category.name}
            getOptionValue={(category) => category.id}
            placeholder="Categorias"
          />
          <ErrorMensage>{errors.category?.message}</ErrorMensage>
        </div>
        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Conteiner>
  )
}
export default EditProduct
