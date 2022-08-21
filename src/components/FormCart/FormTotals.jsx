import React from 'react'

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency';

const FormTotals = ({products}) => {

    const subtotalValue = products.map((product) => (
        product.amount * product.comic.prices[0].price
    ))

    let total = 0
    for (const value of subtotalValue) total += value 
  return (
    <S.ContainerTotals>
        <S.CartTotals>
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
    </S.ContainerTotals>
  )
}

export default FormTotals