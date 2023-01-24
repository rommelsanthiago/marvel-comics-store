import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    @media (max-width: 620px){
        left: 47%;
    }
`;

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    border-radius: 10px;

    @media (max-width: 620px){
        display: flex;
        flex-direction: column;
        padding: 0 0.8rem;
    }
`;

export const DivModalImg = styled.div`
    width: 30vw;
    height: 80vh;
    border-radius: 10px 0 0 10px;
    background: #000;

    @media (max-width: 620px){
        width: 100%;
        height: 30vh;
        border-radius: 0px 0px 10px 10px;
    }
`;

export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;

    @media (max-width: 620px){
        border-radius: 0px 0px 10px 10px;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    padding-right: 1em;

    h1 {
        color: red;
    }

    p {
        margin-bottom: 0.5rem;
    }

    button {
        color: #141414;
        background: none; 
        border: 2px solid #141414; 
        padding: 0.5em 1.5em; 
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background: #141414;
          color: #fff;
          border: 2px solid #fff;
        }
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    transition: all .4s ease;

    &:hover {
        transform: scale(1.3);
        color: red;
    }
`;
