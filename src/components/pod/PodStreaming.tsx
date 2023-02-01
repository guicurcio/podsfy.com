/**
 * PodStreaming
 */
export default function PodStreaming() {
  return (
    <div className="grid grid-flow-row justify-start items-start gap-4 py-2 px-4 rounded-sm bg-[#0a0a0b]/[0.25] border border-[#252525] border-opacity-[20%]">
      <div className="grid grid-flow-col pt-2 justify-start gap-2 items-center">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px] brightness-200 border-[#252525] border-opacity-[30%]"
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
        <p className="text-[13.5px] self-center align-middle font-medium font-moderat text-left text-[#a5a5a5]/80 antialiased tracking-[-0.03em]">
          Streaming At
        </p>
      </div>
      <div className="grid grid-flow-col gap-x-2 items-start justify-start pb-2">
        <img
          src="/pods/tunein.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
        <img
          src="/pods/stitcher.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
        <img
          src="/pods/audible.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
        <img
          src="/pods/spotify.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
        <img
          src="/pods/youtube.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
        <img
          src="/pods/soundcloud.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
        <img
          src="/pods/google.webp"
          className="pod-streaming shadow-3xl border-[#88888820] border-2"
        ></img>
      </div>
    </div>
  );
}
