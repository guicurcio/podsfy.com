import { Soundy } from 'components/SoundGrad';
import { twMerge } from 'tailwind-merge';

export default function Page() {
  return (
    <div className="mx-auto my-[100px] max-w-[1300px] cursor-default select-none self-center align-middle">
      <div className="holder relative h-[800px] overflow-hidden rounded-[15px] border border-sharper border-opacity-10  bg-black bg-opacity-[95%] font-visuelt shadow-3xl backdrop-blur-[10px] ">
        <Soundy
          pathOpacity="0.4"
          strokeWidth={0.5}
          viewbox="0 0 800 800"
          className={twMerge(
            'z-5 absolute h-[1200px] w-[1300px] -translate-y-[100px] -translate-x-[200px] rotate-[-80deg] scale-y-[-1] ',
            'scale-x-[-1] fill-none opacity-[100%] blur-[0px] brightness-[98%] contrast-[110%] hue-rotate-[-310deg] saturate-[110%] sepia-[20%]',
          )}
        ></Soundy>{' '}
        <Soundy
          pathOpacity="0.4"
          strokeWidth={0.5}
          viewbox="0 0 800 800"
          className={twMerge(
            'z-5 absolute h-[1200px] w-[1300px] translate-y-[108px] translate-x-[981px] rotate-[-80deg] scale-y-[1] ',
            'scale-x-[-1] fill-none opacity-[100%] blur-[0px] brightness-[58%] contrast-[110%] hue-rotate-[-310deg] saturate-[110%] sepia-[20%]',
          )}
        ></Soundy>{' '}
        <div className="relative h-full py-20 backdrop-brightness-[20%]">
          <div className="z-50 mx-auto max-w-[1000px] ">
            <div className=" mx-auto grid max-w-[800px] grid-flow-row gap-4">
              <h1 className="text-center text-[38px] text-white">
                Creating podsfy.com
              </h1>
              <p className="text-[16px] text-white">
                First, I did think about creating a separate
                sqlite with parallel concurrency all over a
                few regions, but then I did think that I
                should just make the most important pages as
                static HTML I imagine we only care about the
                most requested podcasts, and I don't think
                there's quite much sense to make them
                dynamic (I think we could just recreate them
                throughout a period of say, 10 minutes, and
                that's even too much, because the only data
                that we are going to need to feel it dinamyc
                in some sense is the last episodes, maybe a
                new good review, and that's it.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
