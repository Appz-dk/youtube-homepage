import { useState } from "react"
import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react"

import { Button } from "../utils/Button"
import { Searchbar } from "./Searchbar"
import { MenuAndLogo } from "./MenuAndLogo"

export const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const onShowMobileSearch = () => {
    setShowMobileSearch(true)
  }
  const onHideMobileSearch = () => {
    setShowMobileSearch(false)
  }

  return (
    <div className="flex justify-between gap-8 lg:gap-16 py-3 mx-4">

      {!showMobileSearch && <MenuAndLogo />}

      <Searchbar showMobileSearch={showMobileSearch} onHideMobileSearch={onHideMobileSearch} />

      {!showMobileSearch && <div className="flex items-center md:gap-2 flex-shrink-0">
        <Button className="md:hidden" variant="ghost" size="icon" onClick={onShowMobileSearch}>
          <Search className="w-6 h-6" />
        </Button>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Mic className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-6 h-6" />
        </Button>
        </div>
      }

    </div>
  )
}