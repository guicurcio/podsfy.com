"use client"

import type { PopoverProps } from "@radix-ui/react-popover"
import { Check, ChevronsUpDown, Search as SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Button from "ui/components/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "ui/components/Command"
import { Popover, PopoverContent, PopoverTrigger } from "ui/components/Popover"
import mergeClasses from "utils/mergeClasses/mergeClasses"

export type Podcast = {
  slug: string
  name: string
}

export interface SearchBoxProps extends PopoverProps {
  podcasts: Podcast[]
  /**
   * Custom class names passed to the button trigger of the search box.
   */
  className?: string
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string
  /**
   * Custom class names passed to the PopOver component.
   */
  popoverClassName?: string
}

const Search = ({
  podcasts,
  className,
  title,
  popoverClassName,
  ...props
}: SearchBoxProps) => {
  const [open, setOpen] = useState(false)
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast>()
  const router = useRouter()

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger
        className="border-x  border-sharper border-opacity-5 py-2"
        asChild
      >
        <Button
          role="combobox"
          aria-label="Search podcasts, episodes, guests, notes..."
          aria-expanded={open}
          className={mergeClasses(
            "group h-[42px] self-center py-[12px] px-3 align-middle",
            " justify-between font-visuelt text-[14px] font-medium text-white/80",
            className
          )}
        >
          <div className="grid grid-flow-col items-center gap-2">
            <SearchIcon className="-ml-1 h-3 w-4 shrink-0 opacity-50"></SearchIcon>
            {selectedPodcast
              ? selectedPodcast.name
              : title || "Search podcasts, episodes, reviews, notes..."}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={mergeClasses(
          "mt-[-20px] w-full border-0 bg-transparent ",
          popoverClassName
        )}
      >
        <Command className="n:rounded-b-[5px] rounded-[12px] rounded-t-[5px] rounded-r-[5px] rounded-l-[5px] border-x border-b border-gray-700 border-opacity-25 bg-[#1f1f23] font-visuelt text-[14px]  font-normal text-white/50 shadow-3xl drop-shadow-2xl backdrop:brightness-50">
          <CommandInput
            className="font-normal text-white/50 placeholder:text-white/70"
            placeholder="Search for podcasts, episodes, guests, notes..."
          />

          <CommandEmpty>No podcasts found.</CommandEmpty>

          <CommandGroup className="grid grid-flow-row divide-y-2 divide-black">
            {podcasts.map((podcast) => (
              <CommandItem
                className="font-visuelt font-normal"
                key={podcast.slug}
                onSelect={() => {
                  setSelectedPodcast(podcast)
                  setOpen(false)
                  router.push(`/podcast/${podcast.slug}`)
                }}
              >
                <span className="h-4 self-center  align-middle">
                  {" "}
                  {podcast.name}
                </span>

                <Check
                  className={mergeClasses(
                    "ml-auto h-4 w-4",
                    selectedPodcast?.slug === podcast.slug
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

Search.displayName = "Search"

export default Search
