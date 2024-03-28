import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

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
  // console.log(categories.categories[1].url)

  return (
    <Conteiner>
      <CategoryImage src={LabelCategory} alt="logo-category-image" />
      <Carousel itemsToShow={5}>
        {Array.isArray(categories.categories) &&
          categories.categories.map((category) => (
            <div key={category.id}>
              <img src={category.url} alt="foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </Conteiner>
  )
}

export default CategoryCarousel
