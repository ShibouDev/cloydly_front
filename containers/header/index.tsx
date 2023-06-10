//Styled
import * as Styled from "./styled";

//Components
import Container from "@/components/ordinary/container";
import Logo from "@/components/simple/logo/logo";
import Filter from "@/components/smart/filter";
import Search from "@/components/smart/search";
import User from "@/components/smart/user";
const Header = () => {
    return (
        <Styled.Wrapper>
            <Container spaceBetween>
                <Styled.LogoAndTooltips>
                    <Logo isHeader/>
                    <Styled.TooltipsWrapper>
                        <Search />
                        <Filter />
                    </Styled.TooltipsWrapper>
                </Styled.LogoAndTooltips>
                <User/>
            </Container>
        </Styled.Wrapper >
    );
};
export default Header;