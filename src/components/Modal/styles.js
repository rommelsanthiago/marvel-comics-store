import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

import * as colors from '../../utils/colors'

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
`;

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: ${colors.backgroundPrimary};
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

export const DivModalImg = styled.div`
    width: 30vw;
    height: 80vh;
    border-radius: 10px 0 0 10px;
    background: #000;
`;

export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    padding-right: 1em;

    p {
        margin-bottom: 0.5rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;
