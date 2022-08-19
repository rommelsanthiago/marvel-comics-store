import React from 'react'

import * as S from './styles'

const Navbar = (props) => {
  return (
    <S.Container>
        {props.children}
    </S.Container>
  )
}

export default Navbar