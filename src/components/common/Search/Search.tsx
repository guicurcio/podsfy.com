"use client";

import type { PopoverProps } from "@radix-ui/react-popover";
import { Check, ChevronsUpDown, Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Podcasts } from "types/podcast";
import Button from "ui/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "ui/components/Command";
import { Popover, PopoverContent, PopoverTrigger } from "ui/components/Popover";
import mergeClasses from "utils/mergeClasses/mergeClasses";

export interface SearchBoxProps extends PopoverProps {
  podcasts: Pick<Podcasts.Podcast, "title" | "slug">[];
  /**
   * Custom class names passed to the button trigger of the search box.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Custom class names passed to the PopOver component.
   */
  popoverClassName?: string;
}

const Search = ({
  podcasts,
  className,
  popoverClassName,
  ...props
}: SearchBoxProps) => {
  const [open, setOpen] = useState(false);
  const [selectedPodcast, setSelectedPodcast] =
    useState<Pick<Podcasts.Podcast, "title" | "slug">>();
  const router = useRouter();

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
            "group h-[42px] self-center px-3 py-[12px] align-middle",
            " justify-between font-visuelt text-[14px] font-medium text-white/80",
            "col-span-7 w-full self-center align-middle",
            "opacity-100 transition-opacity duration-300 ease-in",
            className,
            open &&
            "pointer-events-none opacity-0 transition-opacity duration-300 ease-out",
          )}
        >
          <div className="grid grid-flow-col items-center gap-2">
            {!open && (
              <SearchIcon className="-ml-1 h-3 w-4 shrink-0 opacity-50"></SearchIcon>
            )}
            {selectedPodcast ? selectedPodcast.title : undefined}
            {!open && "Search for podcasts, episodes, guests, notes..."}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={mergeClasses(
          "relative mt-[-20px] h-full w-[715px] border-0 bg-transparent",
          "pointer-events-auto opacity-100 transition-opacity duration-300",
          popoverClassName,
        )}
      >
        <Command
          className={mergeClasses(
            "absolute left-[13px] top-[-24px] h-[360px]",
            "w-[690px] border border-[#171717] bg-[#050607f2] text-white text-white/75",
          )}
        >
          <CommandInput
            className={mergeClasses("text-white/75", "text-white")}
            placeholder="Search for podcasts, episodes, guests, notes..."
          />

          <CommandEmpty>No podcasts found.</CommandEmpty>

          <CommandGroup className="grid grid-flow-row">
            {podcasts.map((podcast) => (
              <CommandItem
                className="font-visuelt font-normal"
                key={podcast.slug}
                onSelect={() => {
                  setSelectedPodcast(podcast);
                  setOpen(false);
                  router.push(`/podcast/${podcast.slug}`);
                }}
              >
                <span className="h-4 self-center align-middle">
                  {podcast.title}
                </span>

                <Check
                  className={mergeClasses(
                    "ml-auto h-4 w-4",
                    selectedPodcast?.slug === podcast.slug
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

Search.displayName = "Search";

export default Search;
