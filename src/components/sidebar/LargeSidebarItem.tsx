import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../utils/Button";

type LargeSidebarItemProps = {
  title: string;
  IconOrImgUrl: LucideIcon | string;
  url: string;
  isActive?: boolean;
  onClick: (path: string) => void
}

export const LargeSidebarItem = ({IconOrImgUrl, title, url, isActive, onClick }: LargeSidebarItemProps) => {
  return (
    <a className={twMerge(buttonStyles({ variant: "ghost" }), `w-full flex items-center flex-nowrap gap-4 px-3 py-2 rounded-md ${isActive ? "font-semibold bg-secondary hover:bg-secondary-hover" : null}`)} href={url} onClick={() => onClick(url)}> 
      {typeof IconOrImgUrl === "string" ?
      <div className="w-5 h-5 flex-shrink-0">
        <img className="w-full h-full object-cover block rounded-full" src={IconOrImgUrl} />
      </div> 
      : 
      <IconOrImgUrl className="w-5 h-5 flex-shrink-0" />}
      <span className="text-xs flex-grow line-clamp-1">{title}</span>
    </a>
  )
}