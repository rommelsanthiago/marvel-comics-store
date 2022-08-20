import React from 'react'

import * as S from './styles'

const Navbar = (props) => {
  return (
    <S.Container>
        <S.Title>Marvel Comics Store</S.Title>
        {props.children}
    </S.Container>
  )
}

export default Navbar