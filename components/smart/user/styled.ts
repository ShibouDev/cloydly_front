import Image from "next/image";
import styled from "styled-components";
export const UserWrapper = styled.div`
display: flex;
align-items: center;
`;

export const UserContainer = styled.div`
display: flex;
align-items: center;
margin-left: 41px;
`;

export const NotificationTooltip = styled.div`
cursor: pointer;
`
export const UserImg = styled(Image)`
border-radius: var(--border-circle);
`;
export const UserInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`;
export const UserName = styled.p`
font-size: 16px;
color: var(--title-color-text);
font-family: var(--text-title);
font-weight: bold;
`;

export const UserEmail = styled.p`
font-size: 13px;
font-family: var(--text-title);
color: var(--none-active-text);
font-weight: 400;
`