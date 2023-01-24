import React, { useContext, useEffect, useState, useMemo } from 'react'
import { useNavigate } from "react-router-dom"
import { ShoppingBag } from 'react-feather';

import * as S from './styles'
import Card from '../../components/Card';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { Button } from '../../components/Button';
import { goToCart } from '../../Routes/coordinator'
import Pagination from '../../components/Pagination';
import StateContext from '../../contexts/StateContext';

const Home = () => {
  const navigate = useNavigate()
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const {
    allComics,
    amount,
    currentPage,
    setCurrentPage,
    limit,
  } = useContext(StateContext);
  
  const currentComics = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage
    const lastPageIndex = firstPageIndex + itemsPerPage
    return allComics.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, allComics, itemsPerPage])
  
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal')
  
    reveals.forEach((reveal) => {
      let windowHeight = window.innerHeight;
      let elementTop = reveal.getBoundingClientRect().top;
      let elementVisible = 100;
  
      if(elementTop < windowHeight - elementVisible && windowHeight - elementTop > -100){
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    })
  };

  window.addEventListener('scroll', reveal);

    return (
        <S.Container>
          <Navbar>
            <Button onClick={() => goToCart(navigate)}>
                <ShoppingBag color="red" size={26} />
                {amount > 0 ? <S.Span>{amount}</S.Span> : ""}
            </Button>
          </Navbar>
          <Pagination
            currentPage={currentPage}
            totalCount={limit}
            itemsPerPage={itemsPerPage}
            onPageChange={page => setCurrentPage(page)}
            top={"5em"}
          />
          <S.CardContainer>
            {allComics.length <= 5
            ? <Loading />
            : currentComics.map(comic => (
                <Card key={comic.id} comic={comic} />
            ))}
          </S.CardContainer>
          <Pagination
            currentPage={currentPage}
            totalCount={limit}
            itemsPerPage={itemsPerPage}
            onPageChange={page => setCurrentPage(page)}
            bottom={"8em"}
          />
          <Footer />
        </S.Container>
    )
}

export default Home