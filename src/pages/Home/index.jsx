import React from 'react'
import { useNavigate } from "react-router-dom"
import { ShoppingBag } from 'react-feather';

import Navbar from '../../components/Navbar'
import { goToCart } from '../../Routes/coordinator'
import { Button } from '../../components/Button';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar>
                <h1>Home</h1>
                <Button onClick={() => goToCart(navigate)}><ShoppingBag color="red" size={36} /></Button>
            </Navbar>
        </div>
    )
}

export default Home