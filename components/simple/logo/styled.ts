import Link from "next/link";
import styled from "styled-components";
interface Props {
    isHeader: boolean;
}

export const LogoWrapper = styled(Link)<Props>`
display: flex;
align-items: center;
margin-right: ${props => props.isHeader && '94px'};
cursor: pointer;
`;

export const LogoCurcle = styled.div`
width: 30px;
height: 30px;
background-color: var(--primary-color);
border-radius: var(--border-circle);
color: var(--color-white);
font-weight: bold;
font-size: 16px;
margin-right: 19px;
font-family: var(--text-title);
display: flex;
align-items: center;
justify-content: center;
`;

export const LogoTitle = styled.p`
color: var(--primary-color);
font-size: 19px;
font-weight: bold;
font-family: var(--text-title);
`;