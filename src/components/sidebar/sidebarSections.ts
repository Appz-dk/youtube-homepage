import { Home, Repeat, Clapperboard, Library, History, PlaySquare, Clock, LucideIcon, ListVideo, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react";
import { playlists, subscriptions } from "../../data/sidebar";

// Not sure about this solution with two types.
export type TSmallSidebarItem = {
  Icon: LucideIcon;
  title: string;
  url: string;
}

export type TLargeSidebarItem = {
  IconOrImgUrl: LucideIcon | string;
  title: string;
  url: string;
}

export const smallScreenSidebar: TSmallSidebarItem[] = [
  {Icon: Home, title: "Home", url: "/"},
  {Icon: Repeat, title: "Shorts", url: "/shorts"},
  {Icon: Clapperboard, title: "Subsctiptions", url: "/subscriptions"},
  {Icon: Library, title: "Library", url: "/library"},
]

export const largeScreenSectionOne: TLargeSidebarItem[] = [
  {IconOrImgUrl: Home, title: "Home", url:"/"},
  {IconOrImgUrl: Clapperboard, title: "Subcriptions", url: "/subscriptions"},
]

export const largeScreenSectionTwo: TLargeSidebarItem[] = [
  {IconOrImgUrl: Library, title: "Library", url:"/library"},
  {IconOrImgUrl: History, title: "History", url: "/history"},
  {IconOrImgUrl: PlaySquare, title: "Your Videos", url: "/your-videos"},
  {IconOrImgUrl: Clock, title: "Watch Later", url: "/playlist?list=WL"},
  
  // Adding 'fake' playlists data
  ...(playlists.map(p => (
    {IconOrImgUrl: ListVideo, title: p.name, url: `/playlist?list=${p.id}`}
  )))
]

export const largeScreenSectionThree: TLargeSidebarItem[] = [
  // Adding 'fake' subscriptions data
  ...(subscriptions.map(s => (
    {IconOrImgUrl: s.imgUrl, title: s.channelName, url: `/playlist?list=${s.id}`}
  )))
]

export const largeScreenSectionFour: TLargeSidebarItem[] = [
  {IconOrImgUrl: Flame, title: "Trending", url:"/trending"},
  {IconOrImgUrl: ShoppingBag, title: "Shopping", url: "/shopping"},
  {IconOrImgUrl: Music2, title: "Music", url: "/music"},
  {IconOrImgUrl: Film, title: "Movies & Tv", url: "/movies-tv"},
  {IconOrImgUrl: Radio, title: "Radio", url:"/radio"},
  {IconOrImgUrl: Gamepad2, title: "Gaming", url:"/gaming"},
  {IconOrImgUrl: Newspaper, title: "News", url:"/news"},
  {IconOrImgUrl: Trophy, title: "Sports", url:"/sports"},
  {IconOrImgUrl: Lightbulb, title: "Learning", url:"/learning"},
  {IconOrImgUrl: Shirt, title: "Fashion & Beauty", url:"/fashion-beauty"},
  {IconOrImgUrl: Podcast, title: "Podcasts", url:"/podcasts"},
]

