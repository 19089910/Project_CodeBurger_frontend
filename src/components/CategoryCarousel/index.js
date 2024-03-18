import React, { useEffect } from 'react'

import LabelCategory from '../../assets/label-categorias.png'
import api from '../../services/api'
import { Conteiner, CategoryImage } from './styles'

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories')

      console.log(response)
    }

    loadCategories()
  }, [])

  return (
    <Conteiner>
      <CategoryImage src={LabelCategory} alt="logo-category-image" />
    </Conteiner>
  )
}

export default CategoryCarousel
