import { ArrowLeft, Search, Mic } from "lucide-react"
import { Button } from "../utils/Button"

type SearchbarProps = {
  showMobileSearch: boolean;
  onHideMobileSearch: () => void;

}

export const Searchbar = ({ showMobileSearch, onHideMobileSearch}: SearchbarProps) => {
  return (
    <form onSubmit={e => e.preventDefault()} className={`${showMobileSearch ? "flex" : "hidden md:flex"} flex-grow items-center justify-center gap-2 md:gap-4`}>
        {showMobileSearch && (
          <Button className="flex-shrink-0" variant="ghost" size="icon" onClick={onHideMobileSearch}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
        )}
        <div className="flex items-center flex-grow max-w-lg">
          <input className="w-full py-2 rounded-s-full outline-none pl-4 pr-2 border border-secondary-border shadow-inner focus-visible:border-blue-500" type="search" placeholder="Search" />
          <Button className="inline-flex flex-shrink-0 bg-gray-100 px-5 py-2.5 rounded-e-full border border-secondary-border border-s-0">
            <Search className="w-5 h-5 text-neutral-500"/>
          </Button>
        </div>
        <div>
          <Button className="flex-shrink-0" variant="default" size="icon" type="button">
            <Mic className="w-5 h-5" />
          </Button>
        </div>
      </form>
  )
}