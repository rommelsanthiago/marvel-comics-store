import styled, { keyframes } from "styled-components"

const animated = keyframes`
    0% {
        width: 0;
    }
    70% {
        width: 100%;
    }
`

export const Loading = styled.h1`
    position: absolute;
    font-size: 3rem;
    color: red;
    top: 50vh;
    left: 40vw;

    ::before {
        content: attr(data-text);
        position: absolute;
        width: 8%;
        height: 100%;
        color: #767070;
        border-right: 2px solid #767070;
        overflow: hidden;
        animation: ${animated} 5s linear infinite;
    }

    @media (max-width: 620px){
        left: 25vw;
    }
`
