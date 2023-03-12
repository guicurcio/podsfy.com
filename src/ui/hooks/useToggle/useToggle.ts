import { useCallback, useState } from 'react';

/**
 * A custom hook to toggle a boolean value.
 *
 * @param defaultValue The default value for the boolean. Defaults to `false`.
 * @returns A tuple with the boolean value and a function to toggle it.
 */
function useToggle(defaultValue = false): [boolean, () => void] {
  const [value, setValue] = useState(defaultValue);

  /**
   * Toggles the boolean value.
   */
  const toggleValue = useCallback(() => setValue((x) => !x), []);

  return [value, toggleValue];
}

export default useToggle;
