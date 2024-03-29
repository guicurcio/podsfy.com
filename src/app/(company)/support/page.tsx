export default function SupportPage() {
  return (
    <div className="grid w-[720px] grid-flow-row gap-4">
      <div className="grid w-full grid-flow-row gap-3 py-[10px]">
        <p className="text-left font-SpaceGrotesk text-[40px] font-semibold tracking-tighter text-white/90">
          Changelog
        </p>
        <div className="relative mx-auto flex w-full items-start justify-start gap-3 rounded-[6px] bg-[#111] py-5 text-center">
          <div className="mx-auto grid grid-flow-col gap-2 text-center">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-[15px] w-[15px] flex-shrink-0 flex-grow-0"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_157_20)">
                <path
                  d="M15.2656 2.05316C14.6671 2.47533 14.0044 2.79823 13.3031 3.00941C12.9267 2.5766 12.4265 2.26984 11.87 2.13061C11.3136 1.99139 10.7278 2.02641 10.1919 2.23094C9.65604 2.43548 9.1959 2.79966 8.87374 3.27423C8.55158 3.7488 8.38294 4.31087 8.39062 4.88441V5.50941C7.29227 5.53789 6.20392 5.29429 5.22251 4.80031C4.24109 4.30633 3.39707 3.57731 2.76562 2.67816C2.76562 2.67816 0.265625 8.30316 5.89062 10.8032C4.60345 11.6769 3.0701 12.115 1.51562 12.0532C7.14062 15.1782 14.0156 12.0532 14.0156 4.86566C14.015 4.69157 13.9983 4.51791 13.9656 4.34691C14.6035 3.71784 15.0536 2.92361 15.2656 2.05316Z"
                  stroke="#888888"
                  stroke-width="0.9375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_157_20">
                  <rect
                    width={15}
                    height={15}
                    fill="white"
                    transform="translate(0.890625 0.179688)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm">
              <span className="text-sm text-[#888]">Make sure to follow us on </span>
              <span className="text-sm text-white">Twitter</span>
              <span className="text-sm text-[#888]"> to hear about these changes first!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-2">
        <div className="relative flex items-start justify-start overflow-hidden rounded-xl border border-white border-opacity-20">
          <img src="2.png"></img>
        </div>
        <div className="grid grid-flow-col items-start justify-start justify-items-start gap-2">
          <div className="relative flex items-center justify-start gap-3">
            <div className="relative flex items-start justify-start space-x-[-10px]">
              <div className="h-[30px] w-[30px] rounded-[15px] bg-black/[0.65]" />
              <div className="h-[30px] w-[30px] rounded-[15px] bg-black/[0.65]" />
              <div className="h-[30px] w-[30px] rounded-[15px] bg-black/[0.65]" />
              <p className="absolute right-[1.41px] top-[16px] h-3 w-[13.39px] text-left text-[10px] font-semibold text-white">
                +3
              </p>
            </div>
          </div>
          <div className="self-center">
            <p className="text-left text-[13px] text-[#888]">March 9, 2023</p>
          </div>
        </div>
        <h1 className="text-[28px] font-medium text-white/80">Improvements and Fixes</h1>
        <p className="text-left font-inter text-[16px] font-normal text-white/50">
          <span className="">- You can now add environment variables </span>
        </p>
        <p className="text-left font-inter text-[16px] font-normal text-white/50">
          <span className="">- You can now add environment variables </span>
        </p>
      </div>
    </div>
  );
}
