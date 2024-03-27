import React, { useEffect, useState } from 'react'

import LabelCategory from '../../assets/label-categorias.png'
import api from '../../services/api'
import { Conteiner, CategoryImage } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      setCategories(data)
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
