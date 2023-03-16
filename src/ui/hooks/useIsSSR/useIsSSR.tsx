/**
 * Check if the current environment is a browser or server.
 * @returns An object with two properties: `isBrowser` and `isServer`
 */
export default function useEnvironment(): {
  isBrowser: boolean
  isServer: boolean
} {
  const isBrowser: boolean = typeof window !== "undefined" && !!window.document

  return {
    isBrowser,
    isServer: !isBrowser,
  }
}
