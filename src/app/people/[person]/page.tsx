import PodBehind from 'components/pod/PodBehind';
import PodDetails from 'components/pod/PodDetails';
import PodEpisodes from 'components/pod/PodEpisodes';
import PodReviews from 'components/pod/PodReviews';
import PodStreaming from 'components/pod/PodStreaming';
import { db } from 'lib/setupDBConfig/setupDBConfig';
import { redirect } from 'next/navigation';
import { cache } from 'react';

const getPersonInfo = cache(async (slugFromParams: string) => {
  return await db.person.findUnique({
    where: {
      slug: slugFromParams,
    },
    select: {
      name: true,
      slug: true,
    },
  });
});

const getPeopleToStaticallyGeneratePages = async () => {
  return await db.person.findMany({
    select: {
      slug: true,
    },
  });
};

export async function generateStaticParams() {
  const people = await getPeopleToStaticallyGeneratePages();
  return people.map((person) => ({
    person: person.slug,
  }));
}

export default async function PeoplePage({ params }) {
  const staticPersonData = await getPersonInfo(params.person);

  if (!staticPersonData.slug) {
    redirect('/404');
  }

  return (
    <>
      <div className="relative  z-50 mx-auto mt-32 max-w-[1200px]">
        <div className="z-20 mx-auto max-w-[1200px] rounded-lg  bg-[#0D0E12] bg-opacity-90">
          <div className="grid w-full  grid-flow-col  justify-start gap-12 rounded-xl p-8 backdrop-brightness-[50%]">
            <div className=" flex flex-col justify-start rounded-md">
              <div className="flex flex-col justify-start rounded-md"></div>
              <PodBehind></PodBehind>
            </div>
            <div className="grid h-full w-[650px] grid-flow-row items-start justify-start gap-6">
              <PodDetails></PodDetails>
              <PodEpisodes></PodEpisodes>
              <PodEpisodes></PodEpisodes>
              <PodStreaming></PodStreaming>
              <PodReviews title={staticPersonData.name}></PodReviews>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
