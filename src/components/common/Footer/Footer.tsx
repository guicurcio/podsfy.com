import Link from "next/link"
import { twMerge } from "tailwind-merge"
import mergeClasses from "utils/mergeClasses"

/**
 * Footer Props description
 */
export interface FooterProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string
}

/**
 * Footer Component
 */
export default function Footer({ className }: FooterProps) {
  return (
    <div
      className={twMerge(
        "border-t border-white border-opacity-5 bg-[#0D0E12] pt-[200px]",
        className
      )}
    >
      <div className="relative mx-auto flex w-full flex-col items-start justify-start px-2 md:max-w-[1200px]">
        <div className="grid w-full grid-flow-row justify-items-center md:grid-flow-col md:place-content-between ">
          <div className="py-6">
            <a
              className={mergeClasses(
                "cursor-pointer py-2 font-SpaceGrotesk text-[30px] font-bold tracking-[-0.08em] text-[#CDCDCD] md:px-3"
              )}
            >
              podsfy
            </a>
          </div>
          <div className="mx-auto grid grid-cols-2 gap-[52px] text-center md:mx-0 md:grid-flow-col md:gap-[64px] md:py-10 md:text-left">
            <div className="grid h-full grid-flow-row gap-[12px]">
              <h1 className="font-visuelt text-[11px] font-medium uppercase  tracking-[0.3px] text-[#e3e5e8]/[0.4]">
                Company
              </h1>
              <Link href="/about" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  About
                </a>
              </Link>
              <Link href="/blog" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Blog
                </a>
              </Link>
              <Link href="/company" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Careers
                </a>
              </Link>
              <Link href="/company" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Newsroom
                </a>
              </Link>
              <Link href="/changelog" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Changelog
                </a>
              </Link>
            </div>
            <div className="grid grid-flow-row   gap-[12px]">
              <h1 className="font-visuelt text-[11px] font-medium uppercase  tracking-[0.3px] text-[#e3e5e8]/[0.4]">
                Resources
              </h1>
              <Link href="/support" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Support
                </a>
              </Link>
              <Link href="/support" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  FAQ
                </a>
              </Link>
              <Link href="/support" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Contact Us
                </a>
              </Link>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
            </div>
            <div className=" grid h-full  grid-flow-row  gap-[12px]">
              <h1 className="font-visuelt text-[11px] font-medium uppercase  tracking-[0.3px] text-[#e3e5e8]/[0.4]">
                App
              </h1>
              <Link href="/platform" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Web
                </a>
              </Link>
              <Link href="/platform" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Mobile
                </a>
              </Link>
              <Link href="/platform" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Podsfy PRO
                </a>
              </Link>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
            </div>
            <div className="grid h-full  grid-flow-row  gap-[12px]">
              <h1 className="font-visuelt text-[11px] font-medium uppercase  tracking-[0.3px] text-[#e3e5e8]/[0.4]">
                Solutions
              </h1>
              <Link href="/company" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Advertising
                </a>
              </Link>
              <Link href="/company" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Investing
                </a>
              </Link>
              <Link href="/company" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Parent Company
                </a>
              </Link>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
              <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                {" "}
              </a>
            </div>
          </div>
        </div>
        <div className="mb-6 h-px w-full bg-[#2b303b]/40" />
        <div className="mx-auto grid grid-flow-row  items-center justify-center gap-2 text-center md:mx-0">
          <div className="grid grid-flow-col gap-4 pb-[10px] md:pb-[0px]">
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" relative h-4 w-4"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_115_7626)">
                <path
                  d="M14.4625 0.375H1.6625C0.7825 0.375 0.0625 1.095 0.0625 1.975V14.775C0.0625 15.655 0.7825 16.375 1.6625 16.375H14.4625C15.3425 16.375 16.0625 15.655 16.0625 14.775V1.975C16.0625 1.095 15.3425 0.375 14.4625 0.375ZM4.8625 13.975H2.4625V6.775H4.8625V13.975ZM3.6625 5.415C2.8625 5.415 2.2225 4.775 2.2225 3.975C2.2225 3.175 2.8625 2.535 3.6625 2.535C4.4625 2.535 5.1025 3.175 5.1025 3.975C5.1025 4.775 4.4625 5.415 3.6625 5.415ZM13.6625 13.975H11.2625V9.735C11.2625 9.095 10.7025 8.535 10.0625 8.535C9.4225 8.535 8.8625 9.095 8.8625 9.735V13.975H6.4625V6.775H8.8625V7.735C9.2625 7.095 10.1425 6.615 10.8625 6.615C12.3825 6.615 13.6625 7.895 13.6625 9.415V13.975Z"
                  fill="#535965"
                />
              </g>
              <defs>
                <clipPath id="clip0_115_7626">
                  <rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(0.0625 0.375)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" relative h-4 w-4"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_115_7629)">
                <path
                  d="M16.0625 2.61412C15.4605 2.87651 14.8238 3.05083 14.1721 3.13172C14.8588 2.72446 15.3723 2.07946 15.6153 1.31892C14.9723 1.7001 14.2688 1.9685 13.5353 2.11252C13.0856 1.6323 12.5019 1.29845 11.86 1.15434C11.2181 1.01024 10.5477 1.06254 9.93586 1.30447C9.32406 1.54639 8.79918 1.96674 8.42942 2.51089C8.05967 3.05504 7.86214 3.69783 7.8625 4.35572C7.8625 4.61572 7.8841 4.86612 7.9385 5.10372C5.2113 4.97092 2.7985 3.66372 1.1777 1.67332C0.883839 2.17614 0.728177 2.74773 0.7265 3.33012C0.7265 4.46612 1.3121 5.47332 2.1833 6.05652C1.66453 6.04265 1.15669 5.90437 0.7025 5.65332V5.68932C0.703545 6.44664 0.965417 7.18048 1.44405 7.76737C1.92269 8.35427 2.58887 8.75838 3.3305 8.91172C3.04989 8.9857 2.76069 9.02201 2.4705 9.01972C2.2609 9.01972 2.0489 9.00772 1.8497 8.96372C2.2745 10.2629 3.4801 11.2181 4.9145 11.2485C3.75347 12.1569 2.32144 12.6498 0.8473 12.6485C0.5785 12.6485 0.3209 12.6357 0.0625 12.6029C1.56241 13.5694 3.31019 14.0807 5.0945 14.0749C11.1305 14.0749 14.4305 9.07492 14.4305 4.74052C14.4305 4.59652 14.4257 4.45572 14.4185 4.31652C15.0653 3.85392 15.6224 3.2773 16.0625 2.61492V2.61412Z"
                  fill="#535965"
                />
              </g>
              <defs>
                <clipPath id="clip0_115_7629">
                  <rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(0.0625 0.375)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <p className=" mx-auto text-center font-moderat text-[11px] font-medium text-[#3f4550] md:w-[600px] ">
          Copyright © 2023 Podsfy.com part of Subjeto Inc. All rights reserved.
        </p>

        <p className=" mx-auto pt-[10px] text-center font-moderat text-[11px] font-medium text-[#3f4550] md:w-[600px]">
          All images and content displayed on this website are the property of
          their respective owners, unless otherwise noted. Use of third-party
          logos and images on this website does not imply endorsement,
          sponsorship, or affiliation with Podsfy.com. If you believe that any
          content on this website infringes upon your intellectual property
          rights, please contact us immediately to resolve the issue.
        </p>
        <div className="mx-auto grid grid-flow-col gap-4 py-[10px] pb-[50px]  pt-[20px] text-center">
          <Link href="/privacy-policy" legacyBehavior passHref>
            <a className="cursor-pointer text-[11px] text-[#535965]/[0.72]">
              Privacy Policy
            </a>
          </Link>
          <Link href="/responsive-disclosure" legacyBehavior passHref>
            <a className="cursor-pointer text-[11px] text-[#535965]/[0.72]">
              Responsible Disclosure
            </a>
          </Link>
          <Link href="/terms-of-use" legacyBehavior passHref>
            <a className="cursor-pointer text-[11px] text-[#535965]/[0.72]">
              Terms of use
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

Footer.displayName = "DashboardFooter"
