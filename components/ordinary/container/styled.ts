import styled from "styled-components";

interface Props{
    spaceBetween: boolean
}
export const ContainerWrap = styled.div<Props>`
width: 100%;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.spaceBetween && "space-between"};
`;