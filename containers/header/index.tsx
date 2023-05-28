import Container from "@/components/ordinary/container";
import Search from "@/components/smart/search";
import Logo from "@/components/ui/logo/logo";
import * as Styled from "./styled";
const Header = () => {
    return (
        <Styled.Wrapper>
            <Container>
                <Logo />
                <Styled.TooltipsWrapper>
                    <Search />
                </Styled.TooltipsWrapper>
            </Container>
        </Styled.Wrapper>
    );
};
export default Header;