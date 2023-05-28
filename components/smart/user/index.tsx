import { Bell } from "@/assets/svg";
import UserImage from "../../../assets/img/user.jpg";
import * as Styled from "./styled";
const User = () => {
    return (
        <Styled.UserWrapper>
            <Styled.NotificationTooltip>
                <Bell />
            </Styled.NotificationTooltip>
            <Styled.UserContainer>
                <Styled.UserImg src={UserImage} width={46} height={46} />
                <Styled.UserInfo>
                    <Styled.UserName>Shibou</Styled.UserName>
                    <Styled.UserEmail>sadandcryalone@gmail.com</Styled.UserEmail>
                </Styled.UserInfo>
            </Styled.UserContainer>
        </Styled.UserWrapper>
    );
};
export default User;