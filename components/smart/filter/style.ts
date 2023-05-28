import styled from "styled-components";

interface Props {
    rotate: boolean;
}

export const FilterWrapper = styled.div`
border: 1px solid var(--secondary-color);
    border-radius: 10px;
    padding: 23px 29px;
    display: flex;
    align-items: center;
    min-width: 217px;
    cursor: pointer;
    position: relative;
`;

export const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const FilterTitle = styled.p`
font-size: 15px;
color: var(--title-color-text);
font-weight: 500;
line-height: 20px;
font-family: var(--text-title);
${FilterWrapper}:hover & {
color: var(--primary-color);
}
`;

export const Tooltip = styled.div<Props>`
transform: ${props => props.rotate ? 'rotate(180deg)' : 'rotate(0deg)'};
transition: transform .2s ease-out;
`

export const FilterItems = styled.div`
position: absolute;
top: 100%;
left: 0;
`