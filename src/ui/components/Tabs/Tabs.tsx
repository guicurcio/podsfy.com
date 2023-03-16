"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import mergeClasses from "utils/mergeClasses"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={mergeClasses("", className)}
    {...props}
  />
))

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={mergeClasses(
      " data-[state=active]:font-medium data-[state=active]:text-white/70",
      " font-normal text-white/40",
      "font-visuelt text-[14px] tracking-[-0.01em]",
      "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] py-[12px] transition-all",
      "disabled:pointer-events-none disabled:opacity-50  data-[state=active]:shadow-sm",
      "bg-[#0D0E12] shadow-2xl  backdrop-brightness-[75%]",
      "duration-300",
      // "border border-white border-opacity-5",
      // data-[state=active]:bg-fondy
      className
    )}
    {...props}
    ref={ref}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={mergeClasses("", className)}
    {...props}
    ref={ref}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
