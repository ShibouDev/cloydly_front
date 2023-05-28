import { ReactNode } from "react";
import * as Styled from "./styled";
const Container = ({
    children, spaceBetween
}: {
    children: ReactNode;
    spaceBetween?: boolean | any
}) => {
    return (
        <Styled.ContainerWrap spaceBetween={spaceBetween}>
            {children}
        </Styled.ContainerWrap>
    );
};
export default Container