import {GridViewRounded, AppsRounded, ReplyRounded, FavoriteRounded, TopicRounded, CloseFullscreenRounded} from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';
type SidebarDataPageTypes = {
    svg: (props: SvgIconProps) => JSX.Element
    name: string
}
export const SidebarDataPageType:SidebarDataPageTypes = [
    {
        svg: GridViewRounded,
        name: 'Dashboard'
    },
    {
        svg: AppsRounded,
        name: 'All Files'
    },
    {
        svg: ReplyRounded,
        name: 'Shared'
    },
    {
        svg: FavoriteRounded,
        name: 'Favorites'
    },
    {
        svg: TopicRounded,
        name: 'Recent'
    },
    {
        svg: CloseFullscreenRounded,
        name: 'Request'
    },
]