"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Props for the Modal component
 */
export interface ModalProps {
  children: React.ReactNode;
  dismissHandler?: () => void;
}

/**
 * A modal component that displays content in an overlay and can be dismissed
 * by either clicking outside of the content or pressing the escape key.
 */
function Modal({ children, dismissHandler }: ModalProps): JSX.Element {
  const overlayRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  /**
   * Handler to dismiss the modal by either calling the dismissHandler prop
   * or navigating back in the router history if no dismissHandler is provided.
   */
  const onDismiss = useCallback(() => {
    if (dismissHandler) {
      dismissHandler();
    } else {
      router.back();
    }
  }, [router, dismissHandler]);

  /**
   * Handler to handle clicks on the overlay and wrapper elements.
   * If the click occurred outside of the content, calls the onDismiss handler.
   *
   * @param e The MouseEvent that triggered the click
   */
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === overlayRef.current || e.target === wrapperRef.current) {
        onDismiss();
      }
    },
    [onDismiss, overlayRef, wrapperRef],
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
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlayRef}
      className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60"
      onClick={onClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={wrapperRef}
        className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2"
        role="document"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
