import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { Home, ShoppingBag } from 'react-feather';

import Navbar from '../../components/Navbar'
import { goToCart, goToHome } from '../../Routes/coordinator'
import * as S from './styles'
import { Button } from '../../components/Button';
import StateContext from "../../contexts/StateContext";
import CardCart from '../../components/CardCart';

const Cart = () => {
    const navigate = useNavigate()

    const { products, amount } = useContext(StateContext)

    return (
        <>
            <Navbar>
                <div>
                    <Button onClick={() => goToHome(navigate)}>
                        <Home color="red" size={26} mr={8} style={{margin: "0 1.5em"}}/>
                    </Button>
                    <Button onClick={() => goToCart(navigate)}>
                        <ShoppingBag color="red" size={26}/>
                        {amount > 0 ? <S.Span>{amount}</S.Span> : ""}
                    </Button>
                </div>
            </Navbar>
            <div>
                <S.Title>Carrinho</S.Title>
                <div>
                    {
                        products.length > 0 ?
                        <CardCart products={products} amount={amount}/>
                        : <h1 style={{color: "red", textAlign: "center"}} >Seu carrinho está vazio.</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart