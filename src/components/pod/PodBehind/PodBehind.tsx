"use client";

import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

/**
 * PodBehind Props description
 */
export interface PodBehindProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * image url
   */
  image?: string;
  /**
   * image url
   */
  genre?: string;
  /**
   * image url
   */
  rating?: number;
  tags?: string;
  podcastTitle?: string;
}

/**
 * PodBehind Component
 */
export default function PodBehind({
  className,
  genre,
  rating,
  tags,
  podcastTitle = "Podcast",
}: PodBehindProps) {
  return (
    <div
      className={twMerge(
        "justify-center items-center py-1 w-full grid grid-flow-row",
        className
      )}
    >
      <div className="grid grid-flow-col gap-2 py-2 mx-auto">
        <button
          onClick={() => {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-sm w-full bg-black bg-opacity-[80%] backdrop-blur-[1px] backdrop-brightness-[75%] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 "
                        src="/podcastcover.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white">
                        {podcastTitle}
                      </p>
                      <p className="mt-1 text-sm text-white text-opacity-75">
                        Saved to Favorites
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ));
          }}
          className="grid grid-flow-row h-[55px] rounded-md w-[70px] gap-1 p-2 hover:backdrop-brightness-[75%] cursor-pointer hover:bg-fondy hover:bg-opacity-[90%]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-white"
          >
            <path
              d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-[13px] text-center text-[#d9e8ed]">Favorite</p>
        </button>
        <div className="grid grid-flow-row h-[55px] rounded-md w-[70px] gap-1 p-2 hover:backdrop-brightness-[75%] cursor-pointer hover:bg-fondy hover:bg-opacity-[90%]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-white"
          >
            <path
              d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="text-[13px] text-center text-[#d9e8ed]">PodList</p>
        </div>
        <div className="grid grid-flow-row h-[55px] rounded-md w-[70px] gap-1 p-2 hover:backdrop-brightness-[75%] cursor-pointer hover:bg-fondy hover:bg-opacity-[90%]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-white"
          >
            <path
              d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-[13px] text-center text-[#d9e8ed]">Like</p>
        </div>
        <div className="grid grid-flow-row h-[55px] rounded-md w-[70px] gap-1 p-2 hover:backdrop-brightness-[75%] cursor-pointer hover:bg-fondy hover:bg-opacity-[90%]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-white"
          >
            <path
              d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="text-[13px] text-center text-[#d9e8ed]">Link</p>
        </div>
      </div>
      <div className="grid grid-flow-row gap-2.5 ">
        <div className=" w-[93%] mx-auto border-t border-[#10161d]/60" />
        <div className="grid grid-flow-col gap-x-8 items-start justify-start px-4 py-1">
          <p className=" text-[15px] font-medium text-left uppercase text-white text-opacity-60 font-visuelt">
            Rating
          </p>
          <p className="text-[14px] font-normal align-middle self-center text-white text-opacity-60 font-visuelt">
            {rating}/10
          </p>
        </div>
        <div className="grid grid-flow-col gap-x-8 items-start justify-start px-4 py-1">
          <p className=" text-[15px] font-medium text-left uppercase text-white text-opacity-60 font-visuelt">
            Genre
          </p>
          <p className="text-[14px] space-x-1  font-normal align-middle self-center text-white text-opacity-60 font-visuelt">
            {genre.split(",").map((str, i) => (
              <span className="capitalize">
                {str}
                {i === genre.split(",").length - 1 ? "." : ","}
              </span>
            ))}
          </p>
        </div>
        <div className=" w-[93%] mx-auto border-t border-[#10161d]/60" />
      </div>
    </div>
  );
}
