import { ReactNode, createContext, useContext, useEffect, useState } from "react"


type TSidebarContext = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const SidebarContext = createContext<TSidebarContext | null>(null)


type SidebarProviderProps = {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true)
  const [isSmallOpen, setIsSmallOpen] = useState(false)

  const isSmallScreen = () => {
    // 1024 is the breakpoint used with tailwind
    return window.innerWidth < 1024
  }

  const onToggle = () => {
    isSmallScreen() ? setIsSmallOpen(p => !p) : setIsLargeOpen(p => !p)
  }

  const onClose = () => {
    isSmallScreen() ? setIsSmallOpen(false) : setIsLargeOpen(false)
  }

  useEffect(() => {
    // https://phuoc.ng/collection/this-vs-that/resize-event-vs-resize-observer/
    const resizeHandler = () => {
      if (!isSmallScreen()) {
        setIsSmallOpen(false)
      }
    }
    
    window.addEventListener("resize", resizeHandler)

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return (
    <SidebarContext.Provider value={{
      isLargeOpen,
      isSmallOpen,
      onToggle,
      onClose,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const value = useContext(SidebarContext)
  if (value === null) {
    throw Error("Cannot use SidebarContext outside of SidebarProvider")
  }
  
  return value
}