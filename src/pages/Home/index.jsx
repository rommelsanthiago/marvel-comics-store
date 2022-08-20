import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { ShoppingBag } from 'react-feather';

import Navbar from '../../components/Navbar'
import { goToCart } from '../../Routes/coordinator'
import { Button } from '../../components/Button';
import StateContext from '../../contexts/StateContext';
import Card from '../../components/Card';
import * as S from './styles'

const Home = () => {
    const navigate = useNavigate()
    const {allComics, amount} = useContext(StateContext)

    return (
        <div>
            <Navbar>
                <Button onClick={() => goToCart(navigate)}>
                    <ShoppingBag color="red" size={26} />
                    {amount > 0 ? <S.Span>{amount}</S.Span> : ""}
                </Button>
            </Navbar>
            <S.CardContainer>
                {allComics.length <= 0
                ? 'Loading...'
                : allComics.map(comic => (
                    <Card key={comic.id} comic={comic} />
                ))}
          </S.CardContainer>
        </div>
    )
}

export default Home