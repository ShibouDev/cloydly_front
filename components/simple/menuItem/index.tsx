import * as Styled from "./styled"
import { ItemProps } from "./types"
const MenuItem = ({svg, name}:ItemProps) => {
    return(
        <Styled.MenuItem>
            <Styled.IconContainer>
                {/* {svg} */}
            </Styled.IconContainer>
        </Styled.MenuItem>
    )
}
export default MenuItem