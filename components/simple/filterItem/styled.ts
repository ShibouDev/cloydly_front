import styled, { keyframes } from "styled-components";

interface Props {
    opened: boolean;
}

const animationOpacity = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const Item = styled.div<Props>`
    border: 1px solid var(--secondary-color);
    background-color: var(--secondary-color);
    border-radius: 10px;
    padding: 12px 29px;
    display: flex;
    align-items: center;
    min-width: 217px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    animation: ${animationOpacity} 0.3s forwards;
`;


export const IconFileTypeCircle = styled.div`
    border-radius: var(--border-circle);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const IconFileType = styled.svg`
    width: 18px;
    height: 18px;
`;

export const NameFileType = styled.p`
    font-size: 16px;
    color: var(--title-color-text);
    font-family: var(--text-title);
    font-weight: bold;
`;
