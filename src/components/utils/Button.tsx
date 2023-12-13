import { ComponentProps } from "react"

import { twMerge } from "tailwind-merge"
import { VariantProps, cva } from "class-variance-authority"


export const buttonStyles = cva(["transition-colors"], {
  variants: {
    size: {
      default: ["rounded-md", "flex", "items-center", "justify-center"],
      icon: ["rounded-full", "flex", "items-center", "justify-center", "p-2.5", "w-10", "h-10"]
    },
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["bg-transparent", "hover:bg-gray-100" ],
      dark: ["bg-secondary-dark", "text-secondary", "hover:bg-secondary-dark-hover"]
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button className={twMerge(buttonStyles({ variant, size }), className)} {...props} />
  )
}