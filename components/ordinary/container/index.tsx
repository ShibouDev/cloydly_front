import { ReactNode } from "react";
import * as Styled from "./styled";
const Container = ({
    children,
}: {
    children: ReactNode;
}) => {
    return (
        <Styled.ContainerWrap>
            {children}
        </Styled.ContainerWrap>
    );
};
export default Container