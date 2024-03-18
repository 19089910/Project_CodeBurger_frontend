import React from 'react'

import BannerHome from '../../assets/burger-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Conteiner, HomeImage } from './styles'

function Home() {
  return (
    <Conteiner>
      <HomeImage src={BannerHome} alt="home-image" />
      <CategoryCarousel />
    </Conteiner>
  )
}

export default Home
