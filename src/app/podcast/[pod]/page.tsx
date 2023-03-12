import PodBehind from "components/pod/PodBehind"
import PodDetails from "components/pod/PodDetails"
import PodEpisodes from "components/pod/PodEpisodes"
import PodImage from "components/pod/PodImage"
import PodReviews from "components/pod/PodReviews"
import PodSimilar from "components/pod/PodSimilar"
import PodStreaming from "components/pod/PodStreaming"
import { db } from "lib/setupDBConfig/setupDBConfig"
import { notFound } from "next/navigation"
import { cache } from "react"

const generateGoodTitleForReviews = (title: string) => {
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

const getPodInfo = cache(async (pod: string) =>
  db.podcast.findUnique({
    where: {
      slug: pod,
    },
    select: {
      title: true,
      description: true,
      slug: true,
      cover: true,
      host: true,
      backgroundCoverImage: true,
      tags: true,
      genre: true,
      rating: true,
      episodes: true,
      reviews: {
        select: {
          review: true,
        },
      },
      streamingAt: {
        select: {
          title: true,
        },
      },
      similarPodcasts: {
        select: {
          title: true,
          cover: true,
          slug: true,
        },
      },
      podcastHost: {
        select: {
          name: true,
        },
      },
    },
  })
)

const getPodcastsToStaticallyGenerate = async () =>
  db.podcast.findMany({
    select: {
      slug: true,
    },
  })

export async function generateStaticParams() {
  const podcasts = await getPodcastsToStaticallyGenerate()
  return podcasts.map((podcast) => ({
    pod: podcast.slug,
  }))
}

export default async function PodcastPage({ params }) {
  const staticPodcastData = await getPodInfo(params.pod)

  if (!staticPodcastData?.title) {
    notFound()
  }

  return (
    <div className="">
      <PodImage
        imageClassName={
          staticPodcastData.backgroundCoverImage ? `top-[-20px]` : `top-[150px]`
        }
        image={
          // staticPodcastData.backgroundCoverImage
          //   ? `../${staticPodcastData.backgroundCoverImage}`
          //   : `./bg/bg.png`
          `/bg.png`
        }
      />
      <div className="   mx-auto pt-[90px] backdrop-blur-[8px] backdrop-brightness-[60%] ">
        <div
          className="mx-auto
  max-w-[1200px]  rounded-[9px] border  border-sharper border-opacity-10  bg-[#0D0E12]  bg-opacity-[95%] py-[25px]  px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]
        "
        >
          <div className="grid grid-flow-col justify-start    gap-[50px] px-3 py-4">
            <div className="grid  w-[300px] grid-flow-row place-content-start items-start  justify-start justify-items-start">
              <div className="relative z-0 inline-flex w-full items-center justify-center rounded-[2px] border-2 border-[#171717] bg-[#050607f2] hover:brightness-[99%] focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50">
                <img
                  src={`../${staticPodcastData.cover}`}
                  draggable={false}
                  className="h-[320px] w-[300px] rounded-[2px] border border-white border-opacity-10 brightness-[98%]"
                />
              </div>

              <PodBehind
                genre={staticPodcastData.genre}
                rating={staticPodcastData.rating}
                tags={staticPodcastData.tags}
                podcastTitle={staticPodcastData.title}
              />
            </div>
            <div className="-mt-3 grid h-full w-[800px] grid-flow-row  items-start gap-[32px] pr-10">
              <PodDetails
                title={`${generateGoodTitleForReviews(
                  staticPodcastData.title
                )}`}
                description={staticPodcastData.description}
                podcastHostName={staticPodcastData?.podcastHost?.name}
              />
              <div className="grid w-full grid-flow-row gap-12">
                <div className="grid w-full grid-flow-row gap-[32px]">
                  <PodEpisodes
                    title={`Featured Episodes of ${generateGoodTitleForReviews(
                      staticPodcastData.title
                    )}`}
                    episodes={staticPodcastData.episodes}
                    defaultCoverImage={`../${staticPodcastData.cover}`}
                  />
                  <PodEpisodes
                    title={`Latest Episodes of ${generateGoodTitleForReviews(
                      staticPodcastData.title
                    )}`}
                    episodes={staticPodcastData.episodes}
                    defaultCoverImage={`../${staticPodcastData.cover}`}
                  />
                  <PodStreaming
                    streamingSites={staticPodcastData.streamingAt}
                  />
                </div>

                <div className="grid grid-flow-row items-start justify-start gap-[100px]">
                  {/* todo: put a button that says to leave a comment */}
                  {staticPodcastData.reviews.length > 0 && (
                    <PodReviews
                      title={generateGoodTitleForReviews(
                        staticPodcastData.title
                      )}
                      reviews={staticPodcastData.reviews}
                    />
                  )}
                  {staticPodcastData.similarPodcasts.length > 0 && (
                    <PodSimilar
                      title={staticPodcastData.title}
                      similarPodcasts={staticPodcastData.similarPodcasts}
                    />
                  )}
                  {/* <PodGuests title={staticPodcastData.title}></PodGuests> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
