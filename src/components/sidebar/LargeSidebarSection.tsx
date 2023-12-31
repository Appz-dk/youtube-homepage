import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../utils/Button";
import { TLargeSidebarItem } from "./sidebarSections";
import { LargeSidebarItem } from "./LargeSidebarItem";
import { baseUrl } from "../../constants/constants";

type LargeSidebarSectionPorps = {
  title?: string;
  visibleItemsCount?: number;
  items: TLargeSidebarItem[],
  activePath?: string;
  isLastSection?: boolean;
  onPathChange: (path: string) => void
}

export const LargeSidebarSection = ({ title, visibleItemsCount = Number.POSITIVE_INFINITY, items, activePath, isLastSection, onPathChange }: LargeSidebarSectionPorps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleItems = isExpanded ? items : items.slice(0, visibleItemsCount)
  const showExpandBtn = items.length > visibleItemsCount

  return (
    <div className={`p-2 ${isLastSection ? "" : "border-b"}`}>
      {title && <div className="text-sm ml-4 my-1">{title}</div>}
      {visibleItems.map(i => (
        <LargeSidebarItem 
          key={i.title} 
          isActive={!!activePath && activePath.endsWith(i.url)} 
          IconOrImgUrl={i.IconOrImgUrl} 
          title={i.title} 
          url={`${baseUrl}/#${i.url}`}
          onClick={onPathChange} 
        />
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

