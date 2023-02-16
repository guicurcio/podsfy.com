import type { DetailedHTMLProps, HTMLProps, KeyboardEvent } from 'react';
import { useFormContext } from 'react-hook-form';

export interface FormProps
  extends DetailedHTMLProps<HTMLProps<HTMLFormElement>, HTMLFormElement> {
  /**
   * Function to be called when the form is submitted.
   */
  onSubmit?: (...args: any[]) => any;
}

export default function Form({ onSubmit, onKeyDown, ...props }: FormProps) {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();

  function handleKeyDown(event: KeyboardEvent) {
    if (
      event.key !== 'Enter' ||
      (!event.ctrlKey && !event.metaKey) ||
      isSubmitting
    ) {
      return;
    }

    event.preventDefault();

    handleSubmit(onSubmit)(event);
  }

  return (
    // We want to support form submission using `Ctrl + Enter` and `Cmd + Enter`
    // so keyboard events must be handled on the form element itself.
    <form
      {...props}
      onKeyDown={(event) => {
        if (onKeyDown) {
          onKeyDown(event);
        }

        handleKeyDown(event);
      }}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
