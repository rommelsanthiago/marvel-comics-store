import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Router = () => (
    <Routes>
        <Route index element={ <Home /> } />
        <Route path='carrinho' element={ <Cart /> } />
    </Routes> 
)


export default Router;
