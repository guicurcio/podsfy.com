import PodBehind from 'components/pod/PodBehind';
import PodDetails from 'components/pod/PodDetails';
import PodEpisodes from 'components/pod/PodEpisodes';
import PodGuests from 'components/pod/PodGuests';
import PodImage from 'components/pod/PodImage';
import PodReviews from 'components/pod/PodReviews';
import PodSimilar from 'components/pod/PodSimilar';
import PodStreaming from 'components/pod/PodStreaming';
import { db } from 'lib/setupDBConfig/setupDBConfig';
import { redirect } from 'next/navigation';
import { cache } from 'react';

const generateGoodTitleForReviews = (title) => {
  let newTitle = title
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (!title.startsWith('The ')) {
    newTitle = 'The ' + newTitle;
  }

  if (!title.endsWith('Podcast')) {
    newTitle = newTitle + ' Podcast';
  }

  return newTitle;
};

const getPodInfo = cache(async (pod: string) => {
  return await db.podcast.findUnique({
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
      podcastHost: {
        select: {
          name: true,
        },
      },
    },
  });
});

const getPodcastsToStaticallyGenerate = async () => {
  return await db.podcast.findMany({
    select: {
      slug: true,
    },
  });
};

export async function generateStaticParams() {
  const podcasts = await getPodcastsToStaticallyGenerate();
  return podcasts.map((podcast) => ({
    pod: podcast.slug,
  }));
}

export default async function PodcastPage({ params }) {
  // console.log(params, "the params");
  const staticPodcastData = await getPodInfo(params.pod);
  // console.log(staticPodcastData, "staticPodcastData info  ");
  // console.log(
  //   generateSlugCombinations(staticPodcastData.slug),
  //   "the slug combinations"
  // );
  if (!staticPodcastData.title) {
    redirect('/404');
  }

  console.log(staticPodcastData.episodes.some((episode) => episode.bestEpisode));
  return (
    <div className="z-0">
      {staticPodcastData.backgroundCoverImage ? (
        <PodImage image={`../${staticPodcastData.backgroundCoverImage}`}></PodImage>
      ) : (
        <div className="relative z-0">
          <img
            className="absolute xl:scale-x-[105%] bg-[#0D0E12] scale-[120%] brightness-[60%] object-cover xl:scale-y-[100%] md:top-[50px] xl:top-[-120px] md:rotate-[8deg] xl:translate-x-[25px]"
            src="./bg/bg.png"
          ></img>
        </div>
      )}
      <div className=" z-50 mx-auto pt-[120px] relative backdrop-blur-[8px] backdrop-brightness-[60%]">
        <div
          className="max-w-[1050px] mx-auto z-20  

  overflow-hidden rounded-[4px] border border-sharper  border-opacity-10 py-[25px]  px-[20px]  bg-[#0D0E12] bg-opacity-[95%]  backdrop-blur-[10px] font-visuelt shadow-3xl relative
        
        "
        >
          <div className="grid grid-cols-12  gap-16 grid-flow-col  justify-start px-2 py-2 rounded-xl">
            <div className="col-span-3 grid grid-flow-row items-start justify-start  justify-items-start place-content-start">
              <div className="justify-start ">
                <img
                  src={`../${staticPodcastData.cover}`}
                  draggable={false}
                  className="rounded-[6px] h-[275px] border-opacity-[10%] blur-[0.5px] brightness-[75%]"
                />
              </div>
              <PodBehind
                genre={staticPodcastData.genre}
                rating={staticPodcastData.rating}
                tags={staticPodcastData.tags}
                podcastTitle={staticPodcastData.title}
              ></PodBehind>
            </div>
            <div className="items-start grid grid-flow-row gap-4 h-full col-span-9 ">
              <PodDetails
                title={staticPodcastData.title}
                description={staticPodcastData.description}
                podcastHostName={staticPodcastData?.podcastHost?.name}
              ></PodDetails>
              <div className="justify-start items-start grid grid-flow-row gap-12 w-full">
                <div className="grid grid-flow-row gap-4 w-full">
                  <PodEpisodes
                    title="Best Episodes"
                    episodes={staticPodcastData.episodes}
                  ></PodEpisodes>
                  <PodEpisodes
                    title="Latest Episodes"
                    episodes={staticPodcastData.episodes}
                  ></PodEpisodes>
                  <PodStreaming></PodStreaming>
                </div>

                <div className="justify-start items-start grid grid-flow-row gap-8">
                  <PodReviews
                    title={generateGoodTitleForReviews(staticPodcastData.title)}
                  ></PodReviews>
                  <PodSimilar title={staticPodcastData.title}></PodSimilar>
                  <PodGuests title={staticPodcastData.title}></PodGuests>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
