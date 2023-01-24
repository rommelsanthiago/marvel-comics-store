import styled from "styled-components";

import * as colors from '../../utils/colors'

export const Container = styled.div`
  height: 28em;
  min-width: 18em;
  max-width: 18em;
`

export const Card = styled.div.attrs(props => ({
	className: props.className,
}))`
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
      width: 100%;
      height: 0;
      content: '';
      position: absolute;
      left:0;
      bottom:0;
      box-sizing: border-box;
      border-bottom: 5px solid ${colors.primary};
      border-left: 5px solid ${colors.primary};
      transition: all .8s ease;
  }
  ::after{
      width: 100%;
      height:0;
      content: '';
      position: absolute;
      right:0;
      top:0;
      box-sizing: border-box;
      border-top: 5px solid ${colors.primary};
      border-right: 5px solid ${colors.primary};
      transition: all .8s ease;
  }
  &:hover::before{
      border-color: ${colors.secondary};
      width: 0;
      height: 100%;
  }
  &:hover::after {
      border-color: ${colors.secondary};
      width: 0;
      height: 100%;
  }
  &:focus {
    transform: translateY(-5px);
  }
  &:hover {
    padding-bottom: 3rem;
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

  & .active {
    font-size: 5rem;
  }
`;

export const Img = styled.img`
  align-self: center;
  max-width: 100%;
  cursor: pointer;
  z-index: 10;
`

export const Button = styled.button`
  width: 65%;
  display: ${props => props.display};
  color: ${colors.secondary};
  position: absolute;
  background: none; 
  border: 2px solid ${colors.secondary}; 
  padding: 0.5em 1.5em; 
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  margin: auto;
  left: 18%;
  right: 30%;
  bottom: 10px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: #607d8b4f;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }
`
