import { TVideo } from "../../data/mainData"
import { formatDuration } from "../../utils/durationFormatter"
import { formatPostedAt } from "../../utils/postedAtFormatter"


type VideoGridItemProps = TVideo

export const VideoGridItem = ({ id, channel, duration, postedAt, thumbnailUrl, title, videoUrl, views }: VideoGridItemProps) => {
  
  return (
    <div className="flex flex-col gap-3">
      <a href={`/watch?v=${id}`} className="relative">
        <div className="rounded-lg aspect-video">
         <img src={thumbnailUrl} className="block w-full h-full object-cover rounded-lg"/>
        </div>
        <div className="absolute bottom-1 right-1 text-xs bg-black/70 text-white py-[1px] px-[5px] rounded-lg font-semibold">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="grid grid-cols-[auto,1fr] gap-4">
        <div className="w-8 h-8 flex-shrink-0">
          <a href={`/@${channel.id}`}>
            <img src={channel.profileUrl} className="block w-full h-full object-cover rounded-full"/>
          </a>
        </div>
        <div>
          <a href={`/watch?v=${id}`} className="line-clamp-2 text-sm font-semibold leading-5">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-xs text-neutral-400">
            {channel.name}
          </a>
          <div className="text-xs text-neutral-400 flex gap-1 items-center">
            <span>{VIEW_FORMATTER.format(views)} views</span>
            <span>&bull;</span>
            <span>{formatPostedAt(postedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })