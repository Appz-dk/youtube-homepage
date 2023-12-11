import { ElementRef, useEffect, useRef, useState } from "react"
import { Button } from "../utils/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TRANSLATE_AMOUNT } from "../../constants/constants"

type CategoriesProps = {
  categories: string[]
}

export const Categoires = ({ categories }: CategoriesProps) => {
  const containerRef = useRef<ElementRef<"div">>(null)
  const [active, setActive] = useState("All")
  const [translateValue, setTranslateValue] = useState(200)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(false)

  const onTranslateLeft = () => {
    setTranslateValue(prev => {
      const newVal = prev - TRANSLATE_AMOUNT
      return newVal <= 0 ? 0 : newVal
    })
  }

  const onTranslateRight = () => {
    setTranslateValue(prev => {
      if (!containerRef.current) {
        return prev
      }
      const { clientWidth, scrollWidth } = containerRef.current
      const scrollAmount = scrollWidth - clientWidth
      const newVal = prev + TRANSLATE_AMOUNT
      return newVal >= scrollAmount ? scrollAmount : newVal

    })
  }
  

  
  // useEffect(() => {
  //   if (!containerRef.current) return
  //   setShowLeftScroll(translateValue !== 0)
  //   setShowRightScroll(translateValue !== containerRef.current?.scrollWidth - containerRef.current?.clientWidth)
  // }, [containerRef, translateValue])


  // This also handles when a user resizes the window
  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver(entires => {
      const container = entires[0]?.target
      if(!container) return

      setShowLeftScroll(translateValue > 0)
      setShowRightScroll(translateValue + container.clientWidth < container.scrollWidth)
    })
    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [containerRef, translateValue, categories])


  
  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <ul className="flex gap-4 whitespace-nowrap w-max transition-transform" style={{transform: `translateX(-${translateValue}px)`}}>
        {categories.map(c => (
          <li key={c}>
            <Button
              variant={active === c ? "dark" : "default"} 
              className="px-2 py-0.5"
              onClick={() => setActive(c)}
            >
              {c}
            </Button>
          </li>
        ))}
      </ul>

      {/* Translate buttons */}
      {showLeftScroll && <div className="absolute top-1/2 -translate-y-1/2 left-0 w-24 h-[105%] bg-gradient-to-r from-white from-50% to-transparent">
        <Button size="icon" variant="ghost" className="h-full w-auto aspect-square p-1.5" onClick={onTranslateLeft}>
          <ChevronLeft />
        </Button>  
      </div>}
      {showRightScroll && <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-[105%] bg-gradient-to-l from-white from-50% to-transparent">
        <Button size="icon" variant="ghost" className="h-full w-auto aspect-square p-1.5 ml-auto" onClick={onTranslateRight}>
          <ChevronRight />
        </Button>  
      </div>}
    </div>
  )
}