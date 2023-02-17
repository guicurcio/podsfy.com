'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { PopoverProps } from '@radix-ui/react-popover';
import { Check, ChevronsUpDown, SearchIcon } from 'lucide-react';
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

export interface PodcastSearchProps extends PopoverProps {
  podcasts: Podcast[];
}

export type Podcast = {
  id: string;
  name: string;
};

export function Search({ podcasts, ...props }: PodcastSearchProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedPodcast, setSelectedPodcast] = React.useState<Podcast>();
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-label="Search podcasts, episodes, guests, notes..."
          aria-expanded={open}
          className={mergeClasses(
            'w-[500px] self-center align-middle h-10 py-2 px-3 group',
            ' justify-between text-white/80 font-visuelt font-medium text-[14px]'
          )}
        >
          <div className="grid grid-flow-col gap-2 items-center">
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
            {podcasts.map((preset) => (
              <CommandItem
                key={preset.id}
                onSelect={() => {
                  setSelectedPodcast(preset);
                  setOpen(false);
                }}
              >
                {preset.name}
                <Check
                  className={mergeClasses(
                    'ml-auto h-4 w-4',
                    selectedPodcast?.id === preset.id ? 'opacity-100' : 'opacity-0'
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
}
