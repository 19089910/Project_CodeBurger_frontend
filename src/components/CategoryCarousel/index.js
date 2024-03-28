import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import LabelCategory from '../../assets/label-categories.png'
import api from '../../services/api'
import {
  Conteiner,
  CategoryImage,
  ConteinerItems,
  Image,
  Button
} from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Conteiner>
      <CategoryImage src={LabelCategory} alt="logo-category-image" />
      <Carousel
        itemsToShow={5}
        styles={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {Array.isArray(categories.categories) &&
          categories.categories.map((category) => (
            <ConteinerItems key={category.id}>
              <Image src={category.url} alt="foto da categoria" />
              <Button>{category.name}</Button>
            </ConteinerItems>
          ))}
      </Carousel>
    </Conteiner>
  )
}

export default CategoryCarousel
