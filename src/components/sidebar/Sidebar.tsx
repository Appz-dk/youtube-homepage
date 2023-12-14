import { useEffect, useState } from "react"

import { SmallSidebarItem } from "./SmallSidebarItem"
import { LargeSidebarSection } from "./LargeSidebarSection"
import { largeScreenSectionFour, largeScreenSectionOne, largeScreenSectionThree, largeScreenSectionTwo, smallScreenSidebar } from "./sidebarSections"
import { useSidebarContext } from "../../context/SidebarContext"
import { MenuAndLogo } from "../header/MenuAndLogo"
import { baseUrl } from "../../constants/constants"


export const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, onClose } = useSidebarContext()
  const [activePath, setActivePath] = useState(baseUrl)

  // This is just for demonstation - Better to use React Router etc.
  // useEffect(() => {
  //   let URI = window.location.pathname
  //   if (window.location.search) {
  //     URI += window.location.search
  //   }
  //   setActivePath(URI)
  // }, [window.location.pathname])

  const onPathChange = (path: string) => {
    console.log(path)
    setActivePath(path)
  }

  return (
    <>

      {/* Sidebar for small screens */}
      <aside className={`sticky top-0 p-2 flex flex-col gap-1 overflow-y-auto scrollbar-hidden ${isLargeOpen ? "lg:hidden" : "lg:flex"}`}>
        {smallScreenSidebar.map(i => (
          <SmallSidebarItem 
          key={i.title} 
          Icon={i.Icon} 
          title={i.title} 
          url={`${baseUrl}/#${i.url}`} 
          onPathChange={onPathChange}
          isActive={activePath.endsWith(i.url)} 
        />
          ))}
      </aside>
      {/* Overlay for small sidebar */}
      {isSmallOpen && <div className="lg:hidden absolute inset-0 z-40 bg-black/40" onClick={onClose} />}

      {/*Sidebar for large screens & pop-in for small screens */}
      <aside 
        className={
          `w-52 absolute lg:sticky top-0 flex-col gap-2 pb-4 overflow-y-auto scrollbar-hidden 
          ${isLargeOpen ? "lg:flex" : "lg:hidden"} 
          ${isSmallOpen ? "left-0 bg-white max-h-screen z-50 transition-all duration-300" : "-left-full bg-white max-h-screen z-50 transition-all duration-300"}`
        }
      >
        <div className="sticky top-0 bg-white w-full lg:hidden pt-2 px-[10px]">
          <MenuAndLogo />
        </div>
        {/* Section One */}
        <LargeSidebarSection items={largeScreenSectionOne} activePath={activePath} onPathChange={onPathChange} />
        {/* Section Two */}
        <LargeSidebarSection items={largeScreenSectionTwo} activePath={activePath} visibleItemsCount={5} onPathChange={onPathChange} />
        {/* Section Three */}
        <LargeSidebarSection title="Subscriptions" items={largeScreenSectionThree} activePath={activePath} visibleItemsCount={5} onPathChange={onPathChange} />
        {/* Section Three */}
        <LargeSidebarSection title="Explore" items={largeScreenSectionFour} activePath={activePath} visibleItemsCount={5} isLastSection onPathChange={onPathChange} />
      </aside>
    </>
  ) 
}