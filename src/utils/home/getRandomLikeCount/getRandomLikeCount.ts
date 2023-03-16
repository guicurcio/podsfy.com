// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */
interface RandomLikeCountConfig {
  logErrors?: boolean
}

// Generates a random number between min and max (inclusive)
export default function getRandomLikeCount(
  min: number,
  max: number,
  config?: RandomLikeCountConfig
): number | null {
  const logErrors = config?.logErrors || false

  // Check if inputs are valid numbers
  if (Number.isNaN(min) || Number.isNaN(max)) {
    if (logErrors) {
      console.error("Invalid input: min and max should be numbers.")
    }
    return 0
  }

  // Check if min is less than or equal to max
  if (min > max) {
    if (logErrors) {
      console.error("Invalid input: min should be less than or equal to max.")
    }
    return 0
  }

  // Generate and return a random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
