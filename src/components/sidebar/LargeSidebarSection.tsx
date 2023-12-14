import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../utils/Button";
import { TLargeSidebarItem } from "./sidebarSections";
import { LargeSidebarItem } from "./LargeSidebarItem";

type LargeSidebarSectionPorps = {
  title?: string;
  visibleItemsCount?: number;
  items: TLargeSidebarItem[],
  activePath?: string;
}

export const LargeSidebarSection = ({ title, visibleItemsCount = Number.POSITIVE_INFINITY, items, activePath }: LargeSidebarSectionPorps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleItems = isExpanded ? items : items.slice(0, visibleItemsCount)
  const showExpandBtn = items.length > visibleItemsCount

  return (
    <div className="border-b p-2">
      {title && <div className="text-sm ml-4 my-1">{title}</div>}
      {visibleItems.map(i => (
        <LargeSidebarItem key={i.title} isActive={!!activePath && i.url.endsWith(activePath)} IconOrImgUrl={i.IconOrImgUrl} title={i.title} url={i.url} />
      ))}
      {showExpandBtn && (
        <Button
          variant="ghost" 
          className="w-full flex justify-start flex-nowrap gap-4 px-3 py-2 rounded-md"
          onClick={() => setIsExpanded(prev => !prev)}
        >
          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          <span className="text-xs flex-grow line-clamp-1 text-start">Show {isExpanded ? "less" : "more"}</span>
        </Button>
      )}
    </div>
  ) 
}

