import * as Styled from "./styled";
const Logo = ({isHeader}: {
    isHeader: boolean
}) => {
    return (
        <Styled.LogoWrapper isHeader href="/">
            <Styled.LogoCurcle>C</Styled.LogoCurcle>
            <Styled.LogoTitle>CLOUDLY</Styled.LogoTitle>
        </Styled.LogoWrapper>
    )
}
export default Logo