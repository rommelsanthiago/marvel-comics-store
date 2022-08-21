import React from 'react'

import * as S from './styles'
import MapContainer from '../Map';
import FormProducts from '../FormCart/FormProducts';
import FormTotals from '../FormCart/FormTotals';

const CardCart = ({products}) => {
  return (
    <S.Container>
      <FormProducts products={products} />
      <FormTotals products={products} />
      <MapContainer />
    </S.Container>
  )
}

export default CardCart