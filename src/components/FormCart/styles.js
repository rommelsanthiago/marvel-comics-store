import styled  from 'styled-components'

import * as colors from '../../utils/colors'
import { Container } from '../CardCart/styles'

// Container Products

export const ContainerProducts = styled.form`
    width: 100%;
    color: ${colors.secondary};
`
export const Table = styled.table`
    width: 100%;
    min-height: 26vh;
`
export const Thead = styled.thead`
    width: 100%;

    tr{
        font-size: 1.5rem
    }
`
export const ThProduct = styled.th`
    text-align: left;
    width: 40vw;
`
export const Th = styled.th`
    width: 12vw;
    text-align: left;
`
export const TdDelete = styled.td`
    width: 5vw;
    text-align: center;
`
export const TdImage = styled.td`
width: 8vw;
`
export const ImageTd = styled.img`
    height: 10vh;
`

// Container Totals

export const ContainerTotals = styled.div`
    width: 100%;
`

export const CartTotals = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: red;

    h2 {
        text-align: center;
    }
`


