import styled from 'styled-components'

import * as colors from '../../utils/colors'

export const Container = styled.div`
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid red;
    background-color: ${colors.primary};
`

export const Title = styled.h1`
    color: ${colors.secondary};
`