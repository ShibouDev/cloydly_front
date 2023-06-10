import MenuItem from "@/components/simple/menuItem";
import { SidebarDataPages, SidebarDataTypes } from "@/core/data/sidebar";
import * as Styled from "./styled";
const SideBar = () => {
    return (
        <Styled.Wrapper>
            <Styled.MenuItemsContainer>
                <Styled.ItemsPages>
                    {SidebarDataPages.map((el, index) => (
                        <MenuItem key={index} Svg={el.svg} text={el.text} />
                    ))}
                </Styled.ItemsPages>
                <Styled.ItemsTypes>
                    {SidebarDataTypes.map((el, index) => (
                        <MenuItem key={index} Svg={el.svg} text={el.text} />
                    ))}
                </Styled.ItemsTypes>
            </Styled.MenuItemsContainer>
        </Styled.Wrapper>
    );
};
export default SideBar;