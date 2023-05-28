import { SearchSvg } from "@/assets/svg";
import * as Styled from "./style";
const Search = () => {
    return(
        <Styled.SearchWrapper>
            <SearchSvg/>
            <Styled.SearchInput placeholder="Search Files..."/>
        </Styled.SearchWrapper>
    )
}
export default Search