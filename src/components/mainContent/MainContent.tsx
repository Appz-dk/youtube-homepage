import { categories } from "../../data/mainData"
import { Categoires } from "./Categories"
import { VideoGrid } from "./VideoGrid"


export const MainContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="sticky top-0 bg-white z-10 pt-1 pb-2">
        <Categoires categories={categories} />
      </div>
      <VideoGrid />
    </div>
  )
}