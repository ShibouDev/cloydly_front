import * as Styled from "./styled";
import { SidebarDataPageType } from "@/core/data/sidebar";
import MenuItem from "@/components/simple/menuItem";
const SideBar = () => {
    return(
        <Styled.Wrapper>
            <Styled.MenuItemsContainer>
                {SidebarDataPageType.map((el) => (
                    <MenuItem svg={el.svg} name={el.name}/>
                ))}
            </Styled.MenuItemsContainer>
        </Styled.Wrapper>
    )
}
export default SideBar