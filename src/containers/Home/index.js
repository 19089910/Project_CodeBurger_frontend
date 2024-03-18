import React from 'react'

import BannerHome from '../../assets/burger-home.svg'
import { Conteiner, HomeImage } from './styles'

function Home() {
  return (
    <Conteiner>
      <HomeImage src={BannerHome} alt="home-image" />
    </Conteiner>
  )
}

export default Home
