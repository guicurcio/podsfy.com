'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PopoverProps } from '@radix-ui/react-popover';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import Button from '../Button/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../Command/Command';
import mergeClasses from 'utils/mergeClasses/mergeClasses';

interface PresetSelectorProps extends PopoverProps {
  presets: Preset[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface Workspace {
  id: string;
  name: string;
  icon: (props: React.SVGAttributes<SVGSVGElement>) => JSX.Element;
}

export interface Preset {
  id: string;
  name: string;
}

export interface Model<Type = string> {
  id: string;
  name: string;
  description: string;
  strengths?: string;
  type: Type;
}

export interface Example {
  title: string;
  description: string;
  icon: (props: React.SVGAttributes<SVGSVGElement>) => JSX.Element;
  color: string;
  href: string;
}

export function PresetSelector({ presets, ...props }: PresetSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedPreset, setSelectedPreset] = React.useState<Preset>();
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
            <Search className="-ml-1 h-3 w-4 shrink-0 opacity-50"></Search>
            {selectedPreset
              ? selectedPreset.name
              : 'Search Podcasts, episodes, guests, notes...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[800px] p-0">
        <Command>
          <CommandInput placeholder="Search presets..." />
          <CommandEmpty>No podcasts found.</CommandEmpty>
          <CommandGroup heading="Examples">
            {presets.map((preset) => (
              <CommandItem
                key={preset.id}
                onSelect={() => {
                  setSelectedPreset(preset);
                  setOpen(false);
                }}
              >
                {preset.name}
                <Check
                  className={mergeClasses(
                    'ml-auto h-4 w-4',
                    selectedPreset?.id === preset.id ? 'opacity-100' : 'opacity-0'
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
