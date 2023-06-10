import * as Styled from "./styled";
import { MenyItemTypes } from "./types";
const MenuItem = ({ Svg, text }: MenyItemTypes) => {
    return (
        <Styled.ItemContainer>
            <Styled.ImgContainer>
                <Svg/>
            </Styled.ImgContainer>
            <Styled.Text>
                {text}
            </Styled.Text>
        </Styled.ItemContainer>
    );
};
export default MenuItem;
