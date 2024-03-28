import React from 'react'

import BannerHome from '../../assets/burger-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Conteiner, HomeImage } from './styles'

function Home() {
  return (
    <Conteiner>
      <HomeImage src={BannerHome} alt="home-image" />
      <CategoryCarousel />
      <OffersCarousel />
    </Conteiner>
  )
}

export default Home
