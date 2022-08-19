import styled from "styled-components";

import * as colors from '../../utils/colors'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.secondary};
  border-radius: 0.5em;
  background: #5e43431a;
  box-shadow: inset 0px 0px 15px 5px rgb(0 0 0 / 8%);
  padding: 1rem 0;
  transition: 0.2s;

  img {
    align-self: center;
    max-width: 100%;
  }

  h2,
  p {
    text-align: center;
    font-size: 1.2em;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
  }

  &:hover,
  &:focus {
    transform: translateY(-5px);
  }
`;
