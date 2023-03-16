/**
 * staticPodcastData
 */
export interface staticPodcastDataArgs {
  /**
   *
   */
}

export const podcasts = [
  {
    slug: "the-joe-rogan-experience",
    name: "The Joe Rogan Experience",
  },
  {
    slug: "on-purpose",
    name: "On Purpose with Jay Shetty",
  },
  {
    slug: "call-her-daddy",
    name: "Call Her Daddy",
  },
  {
    slug: "found-my-fitness",
    name: "Found My Fitness",
  },
  {
    slug: "all-in-podcast",
    name: "All-In",
  },
  {
    slug: "huberman-lab-podcast",
    name: "The Huberman Lab Podcast",
  },
  {
    slug: "beyond-good-and-evil",
    name: "Beyond Good and Evil",
  },
]

/**
 *
 * staticPodcastData
 *
 * @param
 * @returns
 */
export default function staticPodcastData() {
  return podcasts
}
