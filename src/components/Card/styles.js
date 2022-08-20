import styled from "styled-components";

import * as colors from '../../utils/colors'

export const Container = styled.div`
  height: 75vh;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  color: ${colors.secondary};
  border-radius: 0.5em;
  background: #5e43431a;
  box-shadow: inset 0px 0px 15px 5px rgb(0 0 0 / 8%);
  padding: 1rem 0;
  transition: 0.2s;
  overflow: hidden;
  ::before{
      content: '';
      position: absolute;
      left:0;
      bottom:0;
      width:0;
      box-sizing: border-box;
      height: 0;
      border-bottom: 5px solid transparent;
      border-left: 5px solid transparent;
      transition: all .8s ease;
  }
  ::after{
      content: '';
      position: absolute;
      right:0;
      top:0;
      width:0;
      box-sizing: border-box;
      height:0;
      border-top: 5px solid transparent;
      border-right: 5px solid transparent;
      transition: all .8s ease;
  }
  &:hover::before{
      border-color: ${colors.secondary};
      width: 100%;
      height: 100%;
  }
  &:hover::after {
      border-color: ${colors.secondary};
      width: 100%;
      height: 100%;
  }
  &:focus {
    transform: translateY(-5px);
  }
  &:hover {
    padding-bottom: 3.5rem;
    margin-bottom: 0;
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
`;

export const Img = styled.img`
  align-self: center;
  max-width: 100%;
  z-index: 10;
`

export const Button = styled.button`
  display: ${props => props.display};
  color: ${colors.secondary};
  position: absolute;
  background: none; 
  border: 2px solid ${colors.secondary}; 
  padding: 0.5em 1.5em; 
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin: auto;
  left: 30%;
  right: 30%;
  bottom: 10px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: ${colors.secondary};
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }
`
