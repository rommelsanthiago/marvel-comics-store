import React, { useState } from "react";

import * as S from "./styles"
import { formatCurrency } from "../../utils/formatCurrency";
import { Modal } from "../Modal";

const Card = ({comic}) => {

  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

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

          <S.Button display={showButton ? "block" : "none"} >
            Comprar
          </S.Button>
        </S.Card>
      </S.Container>
      <Modal
          showModal={showModal} 
          setShowModal={setShowModal} 
          comic={comic} 
      />
    </>
  );
};

export default Card;
