// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import { FC, SVGProps } from 'react'
import { RemixiconReactIconComponentType } from 'remixicon-react'

export type IconType = FC<SVGProps<SVGSVGElement>>;

export const heroIcons: RemixiconReactIconComponentType[] = [
    InstagramLineIcon,
    FacebookCircleLineIcon,
    DribbbleLineIcon,
    YoutubeLineIcon,
    GithubLineIcon,
]
