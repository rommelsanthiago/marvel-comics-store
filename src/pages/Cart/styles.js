import styled  from 'styled-components'

import * as colors from '../../utils/colors'

export const Link = styled.a`
    cursor: pointer;
`

export const Title = styled.h1`
    color: ${colors.secondary};
    text-align: center;
    padding: 1em 0 2em 0;
`

export const Span = styled.span`
    display: inline;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid ${colors.secondary};
    border-radius: 50%;
    background: ${colors.primary};
    text-align: center;
    color: ${colors.secondary};
    font-size: 0.8em;
    font-weight: 500;
    padding: 0.18em;
`