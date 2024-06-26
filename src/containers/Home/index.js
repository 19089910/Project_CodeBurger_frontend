import React from 'react'

import BannerHome from '../../assets/burger-home.svg'
import { CategoryCarousel, Header, OffersCarousel } from '../../components'
import { Conteiner, HomeImage } from './styles'

export function Home() {
  return (
    <Conteiner>
      <Header />
      <HomeImage src={BannerHome} alt="home-image" />
      <CategoryCarousel />
      <OffersCarousel />
    </Conteiner>
  )
}
