import styled from "styled-components";


export const ItemContainer = styled.div`
    width: 77px;
    display: flex;
    height: 81px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:nth-child(2n){
        margin: 0 0 20px 14px;
    }

    cursor: pointer;
`;
export const ImgContainer = styled.div`
    padding: 13px;
    background: var(--menu-item-disabled-img-container);
    border-radius: 10px;
    ${ItemContainer}:hover & {
        box-shadow: 0 1px 1px 1px var(--box-shadow-primary);
    }
`;
export const Text = styled.p`
    font-family: var(--text-secondary-font-family);
    color: var(--menu-item-disabled-text);
    font-size: 12px;
    font-weight: 400;
`;
