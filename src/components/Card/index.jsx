import React, { useState } from "react";

import * as S from "./styles"
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";
import { Modal } from "../Modal";

const Card = ({comic}) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div>
      <S.Card>
        <img
          src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
          alt={comic.title}
          onClick={openModal}
        />

        <h2>{comic.title}</h2>

        <p>{formatCurrency(comic.prices[0].price)}</p>

        <Button>Comprar</Button>
      </S.Card>
      <Modal
          showModal={showModal} 
          setShowModal={setShowModal} 
          comic={comic} 
      />
    </div>
  );
};

export default Card;
