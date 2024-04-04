import React from 'react'

import BannerHome from '../../assets/burger-home.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Conteiner, HomeImage } from './styles'

export function Home() {
  return (
    <Conteiner>
      <HomeImage src={BannerHome} alt="home-image" />
      <CategoryCarousel />
      <OffersCarousel />
    </Conteiner>
  )
}
