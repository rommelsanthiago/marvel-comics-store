import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <section>
        <a
          href="https://github.com/rommelsanthiago"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="red" size={26} />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="red" size={26} />
        </a>
      </section>
      <small>&copy; Copyright 2022, Rommel Santhiago All rights reserved.</small>
    </S.Footer>
  )
}

export default Footer