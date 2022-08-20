import React from 'react'

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency';

const CardCart = ({products}) => {

  const subtotalValue = products.map((product) => (
    product.amount * product.comic.prices[0].price
  ))

  let total = 0
  for (const value of subtotalValue) total += value  

  return (
    <S.Container>
      <S.FormProducts>
          <table>
              <thead>
                  <tr>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Produto</th>
                      <th>Preço</th>
                      <th>Quantidade</th>
                      <th>Subtotal</th>
                  </tr>
              </thead>
              <tbody>
              {products.length > 0 ? products.map((product) => (
                      <tr style={{color: "red"}} key={product.comic.id} >
                          <td>X</td>
                          <td><img 
                                  src={`${product.comic.thumbnail.path}/portrait_incredible.${product.comic.thumbnail.extension}`} 
                                  alt={product.comic.title}
                              />
                          </td>
                          <td>{product.comic.title}</td>
                          <td>{formatCurrency(product.comic.prices[0].price)}</td>
                          <td>{product.amount}</td>
                          <td>{formatCurrency(product.amount * product.comic.prices[0].price)}</td>
                      </tr>
                  ))
                  : null
              }
              </tbody> 
          </table>
      </S.FormProducts>
      <S.CartCollaterals>
        <S.CartTotals style={{color: "red"}}>
          <h2>Total no carrinho</h2>
          <table>
            <tbody>
              <tr>
                <th>SubTotal</th>
                <td><span>{formatCurrency(total)}</span></td>
              </tr>
              <tr>
                <th>Entrega</th>
                <td>Endereço</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>{formatCurrency(total)}</td>
              </tr>
            </tbody>
          </table>
        </S.CartTotals>
      </S.CartCollaterals>
    </S.Container>
  )
}

export default CardCart