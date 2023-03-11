import Button from 'ui/components/Button';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'ui/components/Tooltip';

/**
 * PodStreaming Props
 */
export interface PodStreamingProps {
  /**
   * Class names passed to the root element.
   */
  className?: string;
  /**
   *
   */
  streamingSites?: {
    title: string;
  }[];
}

/**
 * PodStreaming
 */
export default function PodStreaming({ streamingSites }) {
  return (
    <div className="grid w-full grid-flow-row rounded-[4px]   border-[#252525] border-opacity-[20%] bg-[#0a0a0b] ">
      <div className="grid w-full grid-flow-col items-center justify-start gap-2  py-4  px-4  backdrop-brightness-[50%]">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[16px] w-[16px] border-[#252525] border-opacity-[30%] brightness-200"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_2_693)">
            <rect width={16} height={16} rx={9} fill="#0a0a0b" />
          </g>
          <defs>
            <clipPath id="clip0_2_693">
              <rect width={16} height={16} rx={9} fill="" />
            </clipPath>
          </defs>
        </svg>
        <p className="self-center text-left align-middle font-moderat text-[13.5px] font-medium tracking-[-0.03em] text-[#a5a5a5]/80 antialiased">
          Streaming At
        </p>
      </div>
      <div className="relative grid grid-flow-col  items-start justify-start gap-x-2 border-t border-fondy/50 px-3 py-4 backdrop-brightness-[50%]">
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger >
              <div className="relative"> */}
        {streamingSites?.length >= 1 &&
          streamingSites?.map((site) => (
            <Button variant="subtle" className="w-10 p-0">
              <img
                src={`/pods/${site.title}.webp`}
                className="pod-streaming border-2 border-[#88888820] shadow-3xl"
              ></img>
            </Button>
          ))}

        {/* </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
        {/* <img
          src="/pods/stitcher.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/audible.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/spotify.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/youtube.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/soundcloud.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img>
        <img
          src="/pods/google.webp"
          className="pod-streaming border-2 border-[#88888820] shadow-3xl"
        ></img> */}
      </div>
    </div>
  );
}
