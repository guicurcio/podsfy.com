import { twMerge } from 'tailwind-merge';
import mergeClasses from 'utils/mergeClasses';

/**
 * Footer Props description
 */
export interface FooterProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Footer Component
 */
export default function Footer({ className }: FooterProps) {
  return (
    <div
      className={twMerge(
        'bg-[#0D0E12] border-t border-white border-opacity-5 ',
        className
      )}
    >
      <div className="flex flex-col justify-start items-start relative px-2 max-w-[1200px] mx-auto">
        <div className="grid grid-flow-col place-content-between w-full ">
          <div className="py-6">
            <a
              className={mergeClasses(
                'font-SpaceGrotesk py-2 text-[#CDCDCD] px-3  cursor-pointer tracking-[-0.08em] text-[30px] font-bold'
              )}
            >
              podsfy
            </a>
          </div>
          <div className="grid grid-flow-col gap-[64px] py-10">
            <div className="grid grid-flow-row gap-[12px] h-full">
              <h1 className="text-[10px] font-SpaceGrotesk font-medium  uppercase text-[#e3e5e8]/[0.36]">
                Company
              </h1>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">About</p>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">Blog</p>
              <p className="text-[13px] font-moderat  text-[#e3e5e8]/[0.72]">Careers</p>
              <p className="text-[13px] font-moderat  text-[#e3e5e8]/[0.72]">Newsroom</p>
            </div>
            <div className=" grid grid-flow-row  gap-[12px]">
              <h1 className="text-[10px] font-SpaceGrotesk font-medium  uppercase text-[#e3e5e8]/[0.36]">
                Resources
              </h1>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">Support</p>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">FAQ</p>
              <p className="text-[13px] font-moderat  text-[#e3e5e8]/[0.72]">
                Contact Us
              </p>
              <p className="text-[13px] font-moderat  text-[#e3e5e8]/[0.72]">
                Contribute
              </p>
            </div>
            <div className=" grid grid-flow-row  gap-[12px] h-full justify-items-start">
              <h1 className="text-[10px] font-SpaceGrotesk font-medium  uppercase text-[#e3e5e8]/[0.36]">
                App
              </h1>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">Web</p>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">Mobile</p>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">Podsfy PRO</p>
            </div>
            <div className="grid grid-flow-row  gap-[12px] h-full justify-items-start items-start justify-start">
              <h1 className="text-[10px] font-SpaceGrotesk font-medium  uppercase text-[#e3e5e8]/[0.36]">
                Solutions
              </h1>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">
                Advertising
              </p>
              <p className="text-[13px] font-moderat text-[#e3e5e8]/[0.72]">Investing</p>
            </div>
          </div>
        </div>
        <div className=" w-full h-px bg-[#2b303b]/40 mb-6" />
        <div className="justify-center items-center  grid grid-flow-row gap-2">
          <div className=" grid grid-flow-col gap-4">
            <p className=" text-[11px]  text-[#535965]">Privacy Policy</p>
            <p className="text-[11px]  text-[#535965]">Responsible Disclosure</p>
            <p className="text-[11px]  text-[#535965]">Terms of use</p>
          </div>
          <div className="flex justify-start items-start  gap-4 pt-[5.375px] pb-[4.046875px]">
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-4 h-4 relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_115_7626)">
                <path
                  d="M14.4625 0.375H1.6625C0.7825 0.375 0.0625 1.095 0.0625 1.975V14.775C0.0625 15.655 0.7825 16.375 1.6625 16.375H14.4625C15.3425 16.375 16.0625 15.655 16.0625 14.775V1.975C16.0625 1.095 15.3425 0.375 14.4625 0.375ZM4.8625 13.975H2.4625V6.775H4.8625V13.975ZM3.6625 5.415C2.8625 5.415 2.2225 4.775 2.2225 3.975C2.2225 3.175 2.8625 2.535 3.6625 2.535C4.4625 2.535 5.1025 3.175 5.1025 3.975C5.1025 4.775 4.4625 5.415 3.6625 5.415ZM13.6625 13.975H11.2625V9.735C11.2625 9.095 10.7025 8.535 10.0625 8.535C9.4225 8.535 8.8625 9.095 8.8625 9.735V13.975H6.4625V6.775H8.8625V7.735C9.2625 7.095 10.1425 6.615 10.8625 6.615C12.3825 6.615 13.6625 7.895 13.6625 9.415V13.975Z"
                  fill="#535965"
                />
              </g>
              <defs>
                <clippath id="clip0_115_7626">
                  <rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(0.0625 0.375)"
                  />
                </clippath>
              </defs>
            </svg>
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-4 h-4 relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_115_7629)">
                <path
                  d="M16.0625 2.61412C15.4605 2.87651 14.8238 3.05083 14.1721 3.13172C14.8588 2.72446 15.3723 2.07946 15.6153 1.31892C14.9723 1.7001 14.2688 1.9685 13.5353 2.11252C13.0856 1.6323 12.5019 1.29845 11.86 1.15434C11.2181 1.01024 10.5477 1.06254 9.93586 1.30447C9.32406 1.54639 8.79918 1.96674 8.42942 2.51089C8.05967 3.05504 7.86214 3.69783 7.8625 4.35572C7.8625 4.61572 7.8841 4.86612 7.9385 5.10372C5.2113 4.97092 2.7985 3.66372 1.1777 1.67332C0.883839 2.17614 0.728177 2.74773 0.7265 3.33012C0.7265 4.46612 1.3121 5.47332 2.1833 6.05652C1.66453 6.04265 1.15669 5.90437 0.7025 5.65332V5.68932C0.703545 6.44664 0.965417 7.18048 1.44405 7.76737C1.92269 8.35427 2.58887 8.75838 3.3305 8.91172C3.04989 8.9857 2.76069 9.02201 2.4705 9.01972C2.2609 9.01972 2.0489 9.00772 1.8497 8.96372C2.2745 10.2629 3.4801 11.2181 4.9145 11.2485C3.75347 12.1569 2.32144 12.6498 0.8473 12.6485C0.5785 12.6485 0.3209 12.6357 0.0625 12.6029C1.56241 13.5694 3.31019 14.0807 5.0945 14.0749C11.1305 14.0749 14.4305 9.07492 14.4305 4.74052C14.4305 4.59652 14.4257 4.45572 14.4185 4.31652C15.0653 3.85392 15.6224 3.2773 16.0625 2.61492V2.61412Z"
                  fill="#535965"
                />
              </g>
              <defs>
                <clippath id="clip0_115_7629">
                  <rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(0.0625 0.375)"
                  />
                </clippath>
              </defs>
            </svg>
          </div>
        </div>
        <p className=" w-[684.21px]  text-[11px] font-medium text-[#3f4550] font-moderat mx-auto text-center ">
          Copyright © 2023 Podsfy.com part of Holder Inc. <br></br> All rights reserved.
          All images and content displayed on this website are the property of their
          respective owners, unless otherwise noted. Use of third-party logos and images
          on this website does not imply endorsement, sponsorship, or affiliation with
          Podsfy.com. If you believe that any content on this website infringes upon your
          intellectual property rights, please contact us immediately to resolve the
          issue.
        </p>
      </div>
    </div>
  );
}

Footer.displayName = 'DashboardFooter';
