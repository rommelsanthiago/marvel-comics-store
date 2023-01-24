import React, { useContext } from 'react'
import Swal from "sweetalert2"

import * as S from './styles'
import StateContext from "../../contexts/StateContext";
import { formatCurrency } from '../../utils/formatCurrency';

const FormProducts = () => {
    const { products, setProducts } = useContext(StateContext)

    const setInLocalStorage = (keyName, value) => {
        try {
            localStorage.setItem(keyName, JSON.stringify(value))
        } catch (error) {
            console.log('Error in local storage', error)
            setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)))
        }
    }
    
    const sum = (id) => {
        const index = products.findIndex((i) => i.id === id)
    
        const newCart = [...products]
    
        newCart[index].amount += 1
    
        setProducts(newCart)
    
        setInLocalStorage("products", newCart)
    }

    const sub = (id) => {
        const index = products.findIndex((i) => i.id === id)
    
        const newCart = [...products]
        
        newCart[index].amount -= 1
    
        setProducts(newCart)
    
        setInLocalStorage("products", newCart)
    }

    const toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        animation: false,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const showAlertDelete = (id) => {
        Swal.fire({
          title: 'Tem certeza que quer deletar esse item?',
          text: "Você não será capaz de reverter isso!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, delete!'
        }).then((result) => {
          if (result.isConfirmed) {
            toastMixin.fire({
              animation: true,
              title: 'Quadrinho deletado com sucesso!'
            })
            const newCart = products.filter((i) => i.id !== id)
    
            setProducts(newCart)
        
            setInLocalStorage("products", newCart)
          }
        })
    }

    const cart = document.getElementsByClassName('cart')

    console.log(cart)

  return (
    <S.ContainerProducts className='cart'>
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
                      product.amount > 0 ?
                      <S.TbodyTR key={product.comic.id} >
                          <td onClick={() => showAlertDelete(product.id)} ><S.TdDelete>X</S.TdDelete></td>
                          <S.TdImage><S.ImageTd 
                                  src={`${product.comic.thumbnail.path}/portrait_incredible.${product.comic.thumbnail.extension}`} 
                                  alt={product.comic.title}
                              />
                          </S.TdImage>
                          <td>{product.comic.title}</td>
                          <td>{formatCurrency(product.comic.prices[0].price)}</td>
                          <td>
                            <S.ButtonTd onClick={() => sub(product.id)}>-</S.ButtonTd> 
                                <strong>{product.amount}</strong> 
                            <S.ButtonTd onClick={() => sum(product.id)} >+</S.ButtonTd> 
                          </td>
                          <td>{formatCurrency(product.amount * product.comic.prices[0].price)}</td>
                      </S.TbodyTR>
                      : null
                  ))
                  : null
              }
              </tbody> 
          </S.Table>
      </S.ContainerProducts>
  )
}

export default FormProducts