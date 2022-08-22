import React, { useContext, useState } from "react";

import * as S from "./styles"
import { formatCurrency } from "../../utils/formatCurrency";
import { Modal } from "../Modal";
import StateContext from "../../contexts/StateContext";

const Card = ({comic}) => {
  const { products, setProducts } = useContext(StateContext)

  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const setInLocalStorage = (keyName, value) => {
    try {
        localStorage.setItem(keyName, JSON.stringify(value))
    } catch (error) {
        console.log('Error in local storage', error)
        setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)))
    }
  }

  const addToCart = () => {
    const index = products.findIndex((i) => i.id === comic.id)

    const newCart = [...products]

    if (index === -1) {
      const cartItem = { ...comic, amount: 1, comic }
      newCart.push(cartItem)
    } else {
      newCart[index].amount += 1
    }

    setProducts(newCart)

    setInLocalStorage("products", newCart)
  }

  return (
    <>
      <S.Container>
        <S.Card 
          onMouseOver={() => setShowButton(true)}
          onMouseOut={() => setShowButton(false)}
        >
          <S.Img
            src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
            alt={comic.title}
            onClick={openModal}
          />

          <h2>{comic.title}</h2>

          <p>{formatCurrency(comic.prices[0].price)}</p>

          <S.Button 
            display={showButton ? "block" : "none"} 
            onClick={addToCart}
          >
            Comprar
          </S.Button>
        </S.Card>
      </S.Container>
      <Modal
          showModal={showModal} 
          setShowModal={setShowModal} 
          comic={comic}
          addToCart={addToCart} 
      />
    </>
  );
};

export default Card;
