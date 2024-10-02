import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const product = location.state?.product || {}

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o Preço do produto'),
    category: Yup.object().required('Escolha uma categoria')
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
    control,
    defaultValue: product.category
  })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData),
      {
        pending: 'Editando produto...',
        success: 'Produto editado com sucesso!',
        error: 'Falha ao editadar o produto!'
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
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMensage>{errors.name?.message}</ErrorMensage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
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
            defaultValue={product.category}
          />
          <ErrorMensage>{errors.category?.message}</ErrorMensage>
        </div>
        <input
          type="checkbox"
          {...register('offer')}
          defaultChecked={product.offer}
        ></input>
        <ButtonStyles type="submit">Adicionar Produto</ButtonStyles>
      </form>
    </Conteiner>
  )
}
export default EditProduct
