import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outline" | "ghost" | "secondary"
type ButtonSize = "default" | "sm" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-olive text-white hover:bg-olive/90 shadow-sm",
  outline: "border border-sage/40 bg-transparent text-darkText hover:bg-sage/10",
  ghost: "bg-transparent text-darkText hover:bg-sage/10",
  secondary: "bg-sage/15 text-olive hover:bg-sage/25",
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-5 text-sm",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-6 text-base",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
export default Button