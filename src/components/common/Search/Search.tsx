'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PopoverProps } from '@radix-ui/react-popover';
import { Check, ChevronsUpDown, Search as SearchIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from 'ui/components/Popover';
import Button from 'ui/components/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from 'ui/components/Command';
import mergeClasses from 'utils/mergeClasses/mergeClasses';

export type Podcast = {
  id: string;
  name: string;
};

export interface PodcastSearchProps extends PopoverProps {
  podcasts: Podcast[];
  /**
   * Custom class names passed to the button trigger of the search box.
   */
  className?: string;
}

const Search = ({ podcasts, className, ...props }: PodcastSearchProps) => {
  const [open, setOpen] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast>();
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-label="Search podcasts, episodes, guests, notes..."
          aria-expanded={open}
          className={mergeClasses(
            'group h-10 self-center py-2 px-3 align-middle',
            ' justify-between font-visuelt text-[14px] font-medium text-white/80',
            className,
          )}
        >
          <div className="grid grid-flow-col items-center gap-2">
            <SearchIcon className="-ml-1 h-3 w-4 shrink-0 opacity-50"></SearchIcon>
            {selectedPodcast
              ? selectedPodcast.name
              : 'Search Podcasts, episodes, guests, notes...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[800px] p-0">
        <Command>
          <CommandInput placeholder="Search podcasts..." />
          <CommandEmpty>No podcasts found.</CommandEmpty>

          <CommandGroup heading="Examples">
            {podcasts.map((podcast) => (
              <CommandItem
                key={podcast.id}
                onSelect={() => {
                  setSelectedPodcast(podcast);
                  setOpen(false);
                }}
              >
                {podcast.name}
                <Check
                  className={mergeClasses(
                    'ml-auto h-4 w-4',
                    selectedPodcast?.id === podcast.id
                      ? 'opacity-100'
                      : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup className="pt-0">
            <CommandItem onSelect={() => router.push('/examples')}>
              More examples
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

Search.displayName = 'Search';

export default Search;
