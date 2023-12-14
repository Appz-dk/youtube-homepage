import { useSidebarContext } from "../../context/SidebarContext"
import logo from "../../assets/yt-logo.png"
import { Menu } from "lucide-react"
import { Button } from "../utils/Button"

export const MenuAndLogo = () => {
  const { onToggle } = useSidebarContext()

  return (
    <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
      <Button variant="ghost" size="icon" onClick={onToggle}>
        <Menu className="w-6 h-6" />
      </Button>
      <a className="flex items-center gap-0.5 font-semibold" href="/"><img className="h-6" src={logo} alt="logo" />
        <span className="hidden min-[420px]:inline-block">ReacTube</span>
      </a>
    </div>
  )
}