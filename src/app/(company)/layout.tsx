import CompanySidebar from 'components/common/CompanySidebar';
import Footer from 'components/common/Footer';
import Header from 'components/pod/Header';
import PodImage from 'components/pod/PodImage';
import mergeClasses from 'utils/mergeClasses';

export const podcasts = [
  {
    slug: 'the-joe-rogan-experience',
    name: 'The Joe Rogan Experience',
  },
  {
    slug: 'on-purpose-with-jay-shetty',
    name: 'On Purpose with Jay Shetty',
  },
  {
    slug: 'call-her-daddy',
    name: 'Call Her Daddy',
  },
  {
    slug: 'found-my-fitness',
    name: 'Found My Fitness',
  },
  {
    slug: 'all-in-podcast',
    name: 'All-In',
  },
  {
    slug: 'the-huberman-lab-podcast',
    name: 'The Huberman Lab Podcast',
  },
  {
    slug: 'between-good-and-evil',
    name: 'Between Good and Evil',
  },
];

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0E12]">
      <PodImage imageClassName={`top-[-20px]`} image={`./bg/bg.png`}></PodImage>
      <div className="backdrop-brightness-[40%]">
        <Header></Header>
        <div className="relative z-50 m-[80px] mx-auto max-w-[1100px]">
          <div
            className={mergeClasses(
              'h-[1200px] w-[1100px]',
              ' overflow-hidden rounded-[5px]',
              'bg-[#0D0E12] py-[25px]',
              'border border-sharper border-opacity-10',
              'px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]',
            )}
          >
            <div className="grid w-full  grid-flow-col items-start justify-start justify-items-start gap-[24px]">
              <div className="grid w-[300px] max-w-[300px] grid-flow-row py-4 px-4">
                <CompanySidebar></CompanySidebar>
              </div>

              {children}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
