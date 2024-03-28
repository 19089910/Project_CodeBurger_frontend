import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import LabelOffers from '../../assets/label-offers.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Conteiner, OffersImage, ConteinerItems, Image, Button } from './styles'

function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('/products')
      const onlyOffers = data.products.filter((product) => product.offer)

      console.log(data.products[1])

      setOffers(onlyOffers)
    }
    loadOffers()
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
      <OffersImage src={LabelOffers} alt="logo-offer-image" />
      <Carousel
        itemsToShow={1}
        styles={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {Array.isArray(offers) &&
          offers.map((product) => (
            <ConteinerItems key={product.id}>
              <Image src={product.url} alt="foto da oferta" />
              <p>{product.name}</p>
              <p>{formatCurrency(product.price)}</p>
              <Button>Peça agora</Button>
            </ConteinerItems>
          ))}
      </Carousel>
    </Conteiner>
  )
}

export default OffersCarousel
