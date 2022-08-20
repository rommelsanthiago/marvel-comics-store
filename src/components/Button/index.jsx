import React from 'react'

import * as S from './styles'

export const Button = (props) => {

  return (
    <S.Container onClick={props.onClick} style={props.style}>
        {props.children}
    </S.Container>
  )
}