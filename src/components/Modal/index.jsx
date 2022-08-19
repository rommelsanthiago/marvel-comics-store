import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import LinesEllipsis  from "react-lines-ellipsis";

import { formatCurrency } from '../../utils/formatCurrency';
import * as S from './styles'

export const Modal = ({ showModal, setShowModal, comic }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    width: showModal ? `80vw` : `0%`,
    height: showModal ? `80vh` : `0%`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const noInfo = "😞 Opa! Parece que não contem essa informação!";
  const description = comic.description ? comic.description : noInfo

  return (
    <>
      {showModal ? (
        <S.Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <S.ModalWrapper showModal={showModal}>
                <S.DivModalImg>
                    <S.ModalImg 
                        src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} 
                        alt={comic.title}
                    />
                </S.DivModalImg>
              <S.ModalContent>
                <h1>{comic.title}</h1>
                <div>
                    <h2>Resumo</h2>
                    <LinesEllipsis
                        text={description}
                        maxLine='20'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
                <p>
                    <strong>Número de páginas: </strong> 
                    {comic.pageCount ? comic.pageCount : <em>{noInfo}</em>}
                </p>
                <p>
                    <strong> Série: </strong> 
                    {comic.series.name ? comic.series.name : <em>{noInfo}</em> }
                </p>
                <p>
                    <strong> Número: </strong> {comic.issueNumber? comic.issueNumber: <em>{noInfo}</em>}
                </p>
                <p>
                    <strong> Preço: </strong>{formatCurrency(comic.prices[0].price)}
                </p>
                <button>Adicionar ao carrinho</button>
              </S.ModalContent>
              <S.CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </S.ModalWrapper>
          </animated.div>
        </S.Background>
      ) : null}
    </>
  );
};
