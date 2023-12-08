import { Menu } from "lucide-react"
import logo from "../../assets/yt-logo.png"

export const Header = () => {
  return (
    <div className="flex justify-between gap-8 lg:gap-16 p-2">
      <div className="flex items-center gap-4">
        <button><Menu className="w-6 h-6" /></button>
        <a className="flex items-center gap-0.5 font-semibold" href="/"><img className="h-6" src={logo} alt="logo" /> ReacTube</a>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <input className="py-2 rounded-s-full outline-none pl-4 border border-gray-200 " type="text" placeholder="Search" />
          <button className="bg-gray-100 px-6 py-2 rounded-e-full border border-gray-200 ">X</button>
        </div>
        <div>
          <button className="rounded-full bg-gray-100 w-10 h-10">X</button>
        </div>
      </div>
      <div>icons</div>
    </div>
  )
}