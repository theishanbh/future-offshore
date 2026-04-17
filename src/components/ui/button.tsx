import { cn } from "@/lib/utils"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white shadow-lg hover:bg-navy/90 hover:shadow-navy/25 dark:bg-fo-green dark:text-navy dark:hover:bg-fo-green/90",
        accent:
          "bg-fo-green text-navy shadow-lg hover:bg-fo-green/90 hover:shadow-fo-green/25",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        outlineHero:
          "border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white",
        white: "bg-white text-navy shadow-lg hover:bg-white/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-accent gap-1 border-none p-0 shadow-none underline-offset-4 hover:underline",
        filter:
          "rounded-full border border-primary/20 bg-background text-primary hover:border-primary/50 data-[active=true]:border-transparent data-[active=true]:bg-navy data-[active=true]:text-white data-[active=true]:shadow-lg dark:data-[active=true]:bg-fo-green dark:data-[active=true]:text-navy",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        pill: "h-auto rounded-full px-8 py-3 font-semibold",
        pillSm: "h-auto rounded-full px-5 py-2 text-sm font-semibold",
        pillLg: "h-auto rounded-full px-8 py-4 text-lg font-bold",
        pillBlock: "h-auto w-full rounded-full py-4 font-semibold",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> &
  (
    | { variant: "filter"; active?: boolean }
    | {
        variant?: Exclude<
          VariantProps<typeof buttonVariants>["variant"],
          "filter"
        >
        active?: never
      }
  )

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const active = "active" in props ? props.active : undefined
  const { active: _, ...rest } = props as ButtonProps & { active?: boolean }

  return (
    <ButtonPrimitive
      data-slot="button"
      {...(active !== undefined && { "data-active": active })}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
