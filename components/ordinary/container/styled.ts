import styled from "styled-components";

interface Props{
    spaceBetween: boolean
}

export const ContainerWrap = styled.div<Props>`
width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 37px;
    padding-right: 37px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.spaceBetween && "space-between"};
`;