import styled from 'styled-components'
import * as Colors from '../../utils/colors'

export const Container = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 1em 0;
    position: absolute;
    bottom: ${props => props.bottom};
    top: ${props => props.top};
`

export const Item = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    border: 1px solid #000;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #d3d3d3;
        cursor: pointer;
    }
`

export const ItemSelected = styled(Item)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    background-color: ${Colors.primary};
    font-size: 1.5em;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${Colors.secondary};
    }
`

export const Dots = styled.li`
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`

export const Arrow = styled.div`
    ::before {
        position: relative;
        content: '';
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }
`

export const ArrowLeft = styled(Arrow)`
    transform: rotate(-135deg);
`

export const ArrowRight = styled(Arrow)`
    transform: rotate(45deg);
`

export const DisabledLeft = styled(Arrow)`
    pointer-events: none;
    transform: rotate(-135deg);
    ::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`

export const DisabledRight = styled(Arrow)`
    pointer-events: none;
    transform: rotate(45deg);
    ::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`