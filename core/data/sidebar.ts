import { AllFiles, Dashboard, Documents, Favourites, Pictures, Recent, Request, Shared, Signed, Videos } from "../../assets/svg/index";
import { SidebarInterface } from "../types/sidebar";
export const SidebarDataPages: SidebarInterface[] = [
    {
        svg: Dashboard,
        text: 'Dashboard'
    },
    {
        svg: AllFiles,
        text: 'All Files'
    },
    {
        svg: Shared,
        text: 'Shared'
    },
    {
        svg: Favourites,
        text: 'Favourites'
    },
    {
        svg: Recent,
        text: 'Recent'
    },
    {
        svg: Request,
        text: 'Request'
    },
];
export const SidebarDataTypes: SidebarInterface[] = [
    {
        svg: Pictures,
        text: 'Pictures'
    },
    {
        svg: Videos,
        text: 'Videos'
    },
    {
        svg: Documents,
        text: 'Documents'
    },
    {
        svg: Signed,
        text: 'Signed'
    },
];
