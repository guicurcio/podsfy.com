/**
 *
 * @returns {string}
 */
export default function generateGoodTitleForReviews(title: string) {
  let newTitle = title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  if (!title.startsWith("The ")) {
    newTitle = `The ${newTitle}`
  }

  if (!title.endsWith("Podcast")) {
    newTitle += " Podcast"
  }

  return newTitle
}
