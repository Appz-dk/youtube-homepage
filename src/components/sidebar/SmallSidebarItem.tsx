import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../utils/Button";

type SmallSidebarItemProps = {
  title: string;
  Icon: LucideIcon;
  url: string;
  isActive?: boolean;
  onPathChange: (path: string) => void
}

export const SmallSidebarItem = ({ Icon, title, url, isActive, onPathChange }: SmallSidebarItemProps) => {
  return (
    <a 
      className={twMerge(buttonStyles({ variant: "ghost" }), `w-[82px] max-w-[85px] grid place-items-center px-1 py-3 rounded-md ${isActive ? "font-semibold bg-secondary hover:bg-secondary-hover" : null}`)} 
      href={url} 
      onClick={() => onPathChange(url)}
    > 
      <Icon className="w-5 h-5" />
      <span className="text-xs max-w-full line-clamp-1">{title}</span>
    </a>
  )
}