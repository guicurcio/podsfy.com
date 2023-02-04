'use client';

import Button from 'ui/components/Button';
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from 'ui/components/Dialog';
import { Input } from 'ui/components/Input';
import Label from 'ui/components/Label';

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
export default function Join({
 className,
}: JoinProps) {
 return (
  <div className="mx-auto w-fit mt-4">
   <Dialog>
    <DialogTrigger
     asChild
    >
     <Button
      variant="default"
      size="lg"
     >
      Discover New
      Podcasts -
      it‘s free!
     </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px]">
     <DialogHeader>
      <DialogTitle className="text-center">
       Create an
       Account
      </DialogTitle>
     </DialogHeader>
     <div className="grid gap-4 py-4">
      <div className="grid grid-flow-row items-center gap-2">
       <Label
        htmlFor="email"
        className="text-left"
       >
        Email
       </Label>
       <Input
        id="email"
        className="col-span-4"
       />
      </div>
      <div className="grid grid-flow-row items-center gap-2">
       <Label
        htmlFor="email"
        className="text-left"
       >
        Username
       </Label>
       <Input
        id="username"
        className="col-span-4"
       />
      </div>
      <div className="grid grid-flow-row items-center gap-2">
       <Label
        htmlFor="email"
        className="text-left"
       >
        Name
       </Label>
       <Input
        id="name"
        className="col-span-4"
       />
      </div>
      <div className="grid grid-flow-row items-center gap-2">
       <Label
        htmlFor="email"
        className="text-left"
       >
        Password
       </Label>
       <Input
        id="password"
        className="col-span-4"
       />
      </div>
     </div>
     <DialogFooter>
      <Button
       type="submit"
       className="w-full"
       size="lg"
      >
       Register
      </Button>
     </DialogFooter>
    </DialogContent>
   </Dialog>
  </div>
 );
}
