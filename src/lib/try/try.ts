/**
 * This function takes a Promise as its parameter and returns a Promise that resolves to a tuple containing two values:
 * either the resolved value of the original Promise and a `null` value, or a `null` value and an Error object if the original Promise rejected with an error.
 *
 * @template T The type of the resolved value of the Promise.
 * @param {Promise<T>} promise The Promise to execute.
 * @param {Function} [errorHandler] Optional function to handle errors. If not provided, errors are logged to the console.
 * @returns {Promise<[T, null] | [null, Error]>} A Promise that resolves to a tuple containing either the resolved value of the Promise and a `null` value,
 * or a `null` value and an Error object if the Promise rejects with an error.
 *
 * @example
 * async function fetchData() {
 *   const response = await fetch('/data');
 *   const data = await asyncTuple(response.json(), handleError);
 *   if (data[1]) {
 *     return;
 *   }
 *   console.log(data[0]);
 * }
 *
 * function handleError(error: Error) {
 *   // handle the error in a custom way
 *   console.error('An error occurred:', error);
 * }
 */
export default async function asyncTuple<T>(
  promise: Promise<T>,
  errorHandler: (error: Error) => void = console.error,
): Promise<[T, null] | [null, Error]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    errorHandler(error);
    return [null, error];
  }
}
