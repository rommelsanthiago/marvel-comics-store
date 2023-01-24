import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    position: absolute;
    color: red;
    background-color: #000;
    text-align: center;
    padding: 1rem 0;
    border-top: 0.3rem solid red;
    font-size: 1.5rem;
    bottom: 0;
 
    svg {
        margin: .5em;
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.3);
        }
    }
`