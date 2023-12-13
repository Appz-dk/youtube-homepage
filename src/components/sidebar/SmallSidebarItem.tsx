import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../utils/Button";

type SmallSidebarItemProps = {
  title: string;
  Icon: LucideIcon;
  url: string;
}

export const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a className={twMerge(buttonStyles({ variant: "ghost" }), "grid place-items-center px-1 py-3 rounded-md")} href={url}> 
      <Icon className="w-5 h-5" />
      <span className="text-xs">{title}</span>
    </a>
  )
}