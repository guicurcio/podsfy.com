/**
 * generateSlugCombinations
 */
export interface generateSlugCombinationsArgs {
  /**
   *
   */
}

/**
 *
 * generateSlugCombinations
 *
 * @param
 * @returns
 */
export default function generateSlugCombinations(str: string) {
  const combinations: string[] = [];
  const elements = str.split("-");
  const n = elements.length;

  function generate(array: string[], index: number, separator: string) {
    if (index === n) {
      combinations.push(array.join(separator));
      return;
    }

    for (let i = index; i < n; i++) {
      const [elem] = array.splice(index, 1);
      array.splice(i, 0, elem);
      generate(array, index + 1, separator);
      array.splice(i, 1);
      array.splice(index, 0, elem);
    }
  }

  generate(elements, 0, '-');
  generate(elements, 0, '_');
  generate(elements, 0, '%20');

  return combinations;
}


