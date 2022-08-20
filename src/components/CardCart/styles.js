import styled  from 'styled-components'

import * as colors from '../../utils/colors'

export const Container = styled.div`
    padding: 2em;
`

export const FormProducts = styled.form`
    float: left;
    width: 60%;
    color: ${colors.secondary};
`

export const CartCollaterals = styled.div`
    width: calc(40% - 50px);
    float: right;
`

export const CartTotals = styled.div`
    width: 100% ;
    margin-top: -2rem;
`