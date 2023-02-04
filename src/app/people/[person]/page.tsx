import { PodHeader } from 'components/pod/Header';
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

const getPersonInfo =
 cache(
  async (
   slugFromParams: string
  ) => {
   return await db.person.findUnique(
    {
     where: {
      slug:
       slugFromParams,
     },
     select: {
      name: true,
      slug: true,
     },
    }
   );
  }
 );

const getPeopleToStaticallyGeneratePages =
 async () => {
  return await db.person.findMany(
   {
    select: {
     slug: true,
    },
   }
  );
 };

export async function generateStaticParams() {
 const people =
  await getPeopleToStaticallyGeneratePages();
 return people.map(
  (person) => ({
   person:
    person.slug,
  })
 );
}

export default async function PeoplePage({
 params,
}) {
 const staticPersonData =
  await getPersonInfo(
   params.person
  );

 if (
  !staticPersonData.slug
 ) {
  redirect('/404');
 }

 return (
  <>
   <div className="max-w-[1200px]  z-50 mx-auto mt-32 relative">
    <div className="max-w-[1200px] mx-auto rounded-lg z-20  bg-[#0D0E12] bg-opacity-90">
     <div className="grid grid-flow-col  gap-12  justify-start backdrop-brightness-[50%] w-full p-8 rounded-xl">
      <div className=" rounded-md flex flex-col justify-start">
       <div className="rounded-md flex flex-col justify-start"></div>
       <PodBehind></PodBehind>
      </div>
      <div className="justify-start items-start grid grid-flow-row gap-6 h-full w-[650px]">
       <PodDetails></PodDetails>
       <PodEpisodes></PodEpisodes>
       <PodEpisodes></PodEpisodes>
       <PodStreaming></PodStreaming>
       <PodReviews
        title={
         staticPersonData.name
        }
       ></PodReviews>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
