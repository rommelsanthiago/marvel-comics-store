import React from 'react'
import { useNavigate } from "react-router-dom"
import { Home, ShoppingBag } from 'react-feather';

import Navbar from '../../components/Navbar'
import { goToHome } from '../../Routes/coordinator'
import * as S from './styles'
import { Button } from '../../components/Button';

const Cart = () => {
    const navigate = useNavigate()

    return (
        <Navbar>
            <h1>Carrinho</h1>
            <div>
                <Button onClick={() => goToHome(navigate)}>
                    <Home color="red" size={36} mr={8} style={{margin: "0 1em"}}/>
                </Button>
                <Button onClick={() => goToHome(navigate)}>
                    <ShoppingBag color="red" size={36} style={{margin: "0 1em"}}/>
                </Button>
            </div>
        </Navbar>
    )
}

export default Cart