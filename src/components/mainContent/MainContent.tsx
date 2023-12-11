import { categories } from "../../data/mainData"
import { Categoires } from "./Categories"


export const MainContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="sticky top-0 bg-white z-10">
        <Categoires categories={categories} />
      </div>
      <div className="grid grid-cols-3">
        <div className="w-20 h-20 aspect-video bg-red-600"></div>
        <div className="w-20 h-20 aspect-video bg-red-600"></div>
        <div className="w-20 h-20 aspect-video bg-red-600"></div>
      </div>
    </div>
  )
}