import React, { useState, useEffect } from 'react'

import * as S from './styles'
import { formatCurrency } from '../../utils/formatCurrency';
import useForm from '../../Hooks/UseForm'
import { states } from '../../utils/states'
import MapContainer from '../Map';

const FormTotals = ({products}) => {
    const [address, setAddres] = useState();
    const [total, setTotal] = useState();
    let localAdrress = localStorage.getItem('address')
    
    useEffect(() => {
      if(localAdrress){
        setAddres(localAdrress)
      }
    }, [address])

    const { form, onChange } = useForm({
      road: '', 
      num: '', 
      district: '', 
      city: '', 
      state: '', 
      discount: ''
    })

    const subtotalValue = products.map((product) => (
        product.amount * product.comic.prices[0].price
    ))

    let subtotal = 0
    for (const value of subtotalValue) subtotal += value

    const onSubmit = (e) => {
      e.preventDefault()
      const newAddress = form.road.concat(", ",form.num)
      .concat(", ", form.district)
      .concat(", ", form.city)
      .concat(" - ", form.state)

      setAddres(newAddress)
      localStorage.setItem("address", newAddress)
    }

    const onDiscount = (e) => {
      e.preventDefault()
      if(form.discount === 'marvel'){
        let disc = (subtotal * 10) / 100
        setTotal(subtotal - disc)
      }
    }

  return (
    <S.ContainerTotals>
        <S.CartTotals>
          <h2>Total no carrinho</h2>
          <S.CartContainer>
          <table>
            <tbody>
              <tr>
                <th>SubTotal</th>
                <td><span>{formatCurrency(subtotal)}</span></td>
              </tr>
              <tr>
                <th>Cupom de desconto</th>
                <td>
                  <form onSubmit={onDiscount}>
                    <input 
                      type="text"
                      name={'discount'}
                      placeholder='Digite seu cupom'
                      value={form.discount}
                      onChange={onChange} 
                    />
                    <button>Aplicar desconto</button>
                  </form>
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td>{formatCurrency(total ? total : subtotal)}</td>
              </tr>
            </tbody>
          </table>
          <h2>Entrega</h2>
          <S.Delivery onSubmit={onSubmit}>
            <input 
              type="text" 
              name={'road'} 
              placeholder='Nome da rua' 
              value={form.road}
              onChange={onChange}
              required
            />
            <input 
              type="text" 
              name={'num'} 
              placeholder='Número' 
              value={form.num}
              onChange={onChange}
              required
            />
            <input 
              type="text" 
              name={'district'} 
              placeholder='Barirro' 
              value={form.district}
              onChange={onChange}
              required
            />
            <input 
              type="text" 
              name={'city'} 
              placeholder='Cidade' 
              value={form.city}
              onChange={onChange}
              required
            />
            <select 
              placeholder={"Estado"}
              name={"state"}
              value={form.state}
              onChange={onChange}
              required
            >
              <option value='' disabled>Escolha seu estado</option>
              {states.map((state) => {
                            return <option value={state.nome} key={state.nome}>{state.nome}</option>
                        })}
            </select>
            <button>Enviar</button>
          </S.Delivery>
          </S.CartContainer>
          <S.Address>{address}</S.Address>
        </S.CartTotals>
        <MapContainer address={address}/>
    </S.ContainerTotals>
  )
}

export default FormTotals