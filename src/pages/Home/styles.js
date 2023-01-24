import styled from 'styled-components';

import * as colors from '../../utils/colors'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`

export const CardContainer = styled.section`
  min-height: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 1rem;
  margin: 3rem 0;
  margin-bottom: 5rem;
  padding: 1rem 2rem 12rem;
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