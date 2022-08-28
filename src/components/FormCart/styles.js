import styled  from 'styled-components'

import * as colors from '../../utils/colors'

// Container Products

export const ContainerProducts = styled.div`
    width: 100%;
    color: ${colors.secondary};
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
        font-size: 1.5rem
    }
`
export const ThProduct = styled.th`
    text-align: left;
    width: 40vw;
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

export const TdDelete = styled.td`
    width: 5vw;
    text-align: center;
`
export const TdImage = styled.td`
    width: 8%;
    height: auto;
    padding: 0.8rem 0;
`
export const ImageTd = styled.img`
    height: 10vh;
`

// Container Totals

export const ContainerTotals = styled.div`
    width: 100%;
    margin-top: 2rem;
`

export const CartTotals = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;

    h2 {
        text-align: center;
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


