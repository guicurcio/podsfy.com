"use client";

import Button from "ui/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui/components/Dialog";
import { Input } from "ui/components/Input";
import Label from "ui/components/Label";

/**
 * Join Props description
 */
export interface JoinProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Join Component
 */
export default function Join({ className }: JoinProps) {
  return (
    <div className="mx-auto w-fit mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="lg">
            Discover New Podcasts - it‘s free!
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
