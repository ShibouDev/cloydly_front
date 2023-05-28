//Styled
import * as Styled from "./styled";

//Components
import Container from "@/components/ordinary/container";
import Filter from "@/components/smart/filter";
import Search from "@/components/smart/search";
import User from "@/components/smart/user";
import Logo from "@/components/ui/logo/logo";
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