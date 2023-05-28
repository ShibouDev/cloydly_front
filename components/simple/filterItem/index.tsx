import { Folder } from "@/assets/svg";
import * as Styled from "./styled";
const FilterItem = ({opened}: {opened: boolean}) => {
    return (
        <Styled.Item opened={opened}>
            <Styled.IconFileTypeCircle>
                <Styled.IconFileType>
                    <Folder />
                </Styled.IconFileType>
            </Styled.IconFileTypeCircle>
            <Styled.NameFileType>
                Folder
            </Styled.NameFileType>
        </Styled.Item>
    );
};
export default FilterItem;