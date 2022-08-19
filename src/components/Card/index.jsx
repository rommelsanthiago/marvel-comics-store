import React from "react";

import * as S from "./styles"
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

const Card = (props) => {
    const { comic } = props
  return (
    <div>
      <S.Card>
        <img
          src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
          alt={comic.title}
        />

        <h2>{comic.title}</h2>

        <p>{formatCurrency(comic.prices[0].price)}</p>

        <Button>Comprar</Button>
      </S.Card>
    </div>
  );
};

export default Card;
