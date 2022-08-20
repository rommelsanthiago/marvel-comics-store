import styled from 'styled-components';

import * as colors from '../../utils/colors'

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  gap: 0 1rem;
  margin: 1rem 0;
  margin-bottom: 2rem;
  padding: 2rem 4rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

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