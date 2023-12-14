import { useState } from "react"

import { SmallSidebarItem } from "./SmallSidebarItem"
import { LargeSidebarSection } from "./LargeSidebarSection"
import { largeScreenSectionFour, largeScreenSectionOne, largeScreenSectionThree, largeScreenSectionTwo, smallScreenSidebar } from "./sidebarSections"


export const Sidebar = () => {
  const [isActive, setIsActive] = useState("Home")

  return (
    <>
      {/* Sidebar for small screens */}
      <aside className="sticky top-0 p-2 flex flex-col gap-1 overflow-y-auto scrollbar-hidden lg:hidden">
        {smallScreenSidebar.map(i => (
          <SmallSidebarItem key={i.title} Icon={i.Icon} title={i.title} url={i.url} />
          ))}
      </aside>
      {/*Sidebar for large screens & pop-in for small screens */}
      <aside className="w-52 absolute lg:sticky hidden lg:flex top-0 flex-col gap-2 pb-4 overflow-y-auto scrollbar-hidden">
        {/* Section One */}
        <LargeSidebarSection items={largeScreenSectionOne} isActive={isActive} />
        {/* Section Two */}
        <LargeSidebarSection items={largeScreenSectionTwo} isActive={isActive} visibleItemsCount={5} />
        {/* Section Three */}
        <LargeSidebarSection title="Subscriptions" items={largeScreenSectionThree} isActive={isActive} visibleItemsCount={5} />
        {/* Section Three */}
        <LargeSidebarSection title="Explore" items={largeScreenSectionFour} isActive={isActive} visibleItemsCount={5} />
      </aside>
    </>
  ) 
}