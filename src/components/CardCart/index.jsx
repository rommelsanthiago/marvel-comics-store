import React from 'react'

import * as S from './styles'
import FormProducts from '../FormCart/FormProducts';
import FormTotals from '../FormCart/FormTotals';

const CardCart = ({products}) => {
  return (
    <S.Container>
      <FormProducts products={products} />
      <FormTotals products={products} />
    </S.Container>
  )
}

export default CardCart