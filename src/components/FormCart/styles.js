import styled  from 'styled-components'

import * as colors from '../../utils/colors'

// Container Products

export const ContainerProducts = styled.div`
    width: 100%;
`
export const Table = styled.table`
    width: 100%;
    min-height: 26vh;
    border-collapse: collapse;
    overflow: hidden;
`
export const Thead = styled.thead`
    width: 100%;
    position: sticky;
    z-index: 100;
    border-bottom: 2px solid red;
    tr{
        font-size: 1.5rem;
        color: ${colors.secondary};
    }
`
export const ThProduct = styled.th`
    text-align: left;
    width: 30vw;
    padding-bottom: 1rem;
`
export const Th = styled.th`
    width: 12vw;
    text-align: left;
    padding-bottom: 1rem;
`

export const TbodyTR = styled.tr`
    position: sticky;
    z-index: 100;
    border-bottom: 3px solid #767070;
`

export const TdDelete = styled.span`
    text-align: center;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 1rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;

    &:hover {
        background: #76707059;
    }
`
export const TdImage = styled.td`
    width: 8%;
    height: auto;
    padding: 0.8rem 0;
`
export const ImageTd = styled.img`
    height: 10vh;
`

export const ButtonTd = styled.button`
    width: 2.5em;
    text-align: center;
    background: transparent;
    cursor: pointer;
    margin: .5rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;

    &:hover {
        background: #76707059;
    }
`

// Container Totals

export const ContainerTotals = styled.div`
    width: 100%;
    margin: 2rem 0 6rem 0;
`

export const CartTotals = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
        color: ${colors.secondary};
    }

    span {
        strong {
            color: ${colors.secondary};
        }
    }

    table {
        width: 80%;
    }

    tbody {
        text-align: left;
    }

    th {
        width: 20%;
    }
`

export const CartContainer = styled.div`
    width: 70%;
    padding: 1rem 3rem;
    background-color: #67748142;
    border-radius: 10px;
    margin-top: 1rem;

    h2 {
        margin-bottom: 1rem;
    }
`

export const Delivery = styled.form`
    width: 100%;
    min-height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    select {
        width: 30%;
    }

    button {
        width: 20%;
        align-self: center;
    }
`

export const Address = styled.h1`
    text-align: center;
    padding: 2rem 0;
`


