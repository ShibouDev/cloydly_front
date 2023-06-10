import { FC } from "react";
export interface SidebarInterface {
    svg: FC<React.SVGAttributes<SVGElement>>,
    text: string,
    el?: Element
}