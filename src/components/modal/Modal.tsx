"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Props for the Modal component
 */
export interface ModalProps {
 children: React.ReactNode;
}

/**
 * A modal component that displays content in an overlay and can be dismissed
 * by either clicking outside of the content or pressing the escape key.
 */
function Modal({ children }: ModalProps): JSX.Element {
 const overlayRef = useRef<HTMLDivElement>(null);
 const wrapperRef = useRef<HTMLDivElement>(null);
 const router = useRouter();

 /**
 * Handler to dismiss the modal by navigating back in the router history.
 */
 const onDismiss = useCallback(() => {
  router.back();
 }, [router]);

 /**
  * Handler to handle clicks on the overlay and wrapper elements.
  * If the click occurred outside of the content, calls the onDismiss handler.
  *
  * @param e The MouseEvent that triggered the click
  */
 const onClick = useCallback(
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
   if (
    e.target === overlayRef.current ||
    e.target === wrapperRef.current
   ) {
    onDismiss();
   }
  },
  [onDismiss, overlayRef, wrapperRef]
 );


 /**
  * Handler to handle key presses in the document.
  * If the escape key is pressed, calls the onDismiss handler.
  *
  * @param e The KeyboardEvent that triggered the key press
  */
 const onKeyDown = useCallback(
  (e: KeyboardEvent) => {
   if (e.key === "Escape") {
    onDismiss();
   }
  },
  [onDismiss]
 );

 useEffect(() => {
  document.addEventListener("keydown", onKeyDown);
  return () => document.removeEventListener("keydown", onKeyDown);
 }, [onKeyDown]);

 return (
  <div
   ref={overlayRef}
   className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
   onClick={onClick}
  >
   <div
    ref={wrapperRef}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
   >
    {children}
   </div>
  </div>
 );
}

export default Modal;