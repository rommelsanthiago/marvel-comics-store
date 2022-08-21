import React from 'react'

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency';

const FormProducts = ({products}) => {
  return (
    <S.ContainerProducts>
          <S.Table>
              <S.Thead>
                  <tr>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <S.ThProduct>Produto</S.ThProduct>
                      <S.Th>Preço</S.Th>
                      <S.Th>Quantidade</S.Th>
                      <S.Th>Subtotal</S.Th>
                  </tr>
              </S.Thead>
              <tbody>
              {products.length > 0 ? products.map((product) => (
                      <tr style={{color: "red"}} key={product.comic.id} >
                          <S.TdDelete>X</S.TdDelete>
                          <S.TdImage><S.ImageTd 
                                  src={`${product.comic.thumbnail.path}/portrait_incredible.${product.comic.thumbnail.extension}`} 
                                  alt={product.comic.title}
                              />
                          </S.TdImage>
                          <td>{product.comic.title}</td>
                          <td>{formatCurrency(product.comic.prices[0].price)}</td>
                          <td>{product.amount}</td>
                          <td>{formatCurrency(product.amount * product.comic.prices[0].price)}</td>
                      </tr>
                  ))
                  : null
              }
              </tbody> 
          </S.Table>
      </S.ContainerProducts>
  )
}

export default FormProducts