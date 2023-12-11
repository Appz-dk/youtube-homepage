import { videos } from "../../data/mainData"
import { VideoGridItem } from "./VideoGridItem"

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {videos.map(v => (
        <VideoGridItem key={v.id} {...v}/>
      ))}
    </div>
  )
}