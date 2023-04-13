"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import * as React from "react";
import mergeClasses from "utils/mergeClasses/mergeClasses";
import { Dialog, DialogContent } from "../Dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={mergeClasses(
      "flex h-full w-full flex-col overflow-hidden rounded-md",
      className,
      "--font-visuelt",
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

export type CommandDialogProps = DialogProps;

const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
  <Dialog {...props}>
    <DialogContent className="overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100">
      <Command className="[&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]_+[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
        {children}
      </Command>
    </DialogContent>
  </Dialog>
);

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>, // Tipo de la referencia que aceptará el componente
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> // Props que se pueden pasar al componente
>(
  // La función de renderizado
  ({ className, ...props }, ref) => (
    // Un div que envuelve al componente de entrada de texto
    <div className="flex items-center px-4" cmdk-input-wrapper="">
      {/* Ícono de lupa para la búsqueda */}
      <Search className="h-3 w-3 shrink-0 opacity-50" />
      {/* Usamos CommandPrimitive.Input para renderizar el input, pasando los props y la referencia */}
      <CommandPrimitive.Input
        ref={ref} // Propiedad ref para acceder al input en el DOM
        className={mergeClasses(
          // Clases de estilo para el input
          "!w-[1200px] bg-transparent py-[10px] pl-2",
          "text-white outline-none",
          "self-center align-middle",
          "justify-between font-visuelt text-[14px] font-medium ",
          className,
        )}
        {...props} // Pasamos el resto de los props al input
      />
    </div>
  ),
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={mergeClasses(
      "max-h-[300px] overflow-y-auto overflow-x-hidden",
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={mergeClasses(
      "dark:text-slate-400 [&_[cmdk-group-heading]]:text-slate-900 [&_[cmdk-group-heading]]:dark:text-slate-300 overflow-hidden px-2 py-3 text-black [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={mergeClasses("dark:bg-slate-700 -mx-1 h-px bg-fondy", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={mergeClasses(
      "flex cursor-pointer px-2 pb-[17px] pt-[8px] font-moderat text-[14px] outline-none transition-all",
      "duration-75 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "rounded-md text-left align-middle font-normal hover:text-white/75 hover:backdrop-brightness-[25%]",
      "self-center tracking-[-0.03em] text-white/50 antialiased",
      "hover:bg-fondy",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={mergeClasses(
      "text-slate-500 ml-auto text-xs tracking-widest",
      className,
    )}
    {...props}
  />
);
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
