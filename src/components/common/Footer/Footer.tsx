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
        "border-t border-white border-opacity-5 bg-[#0D0E12]",
        className
      )}
    >
      <div className="relative mx-auto flex w-full flex-col items-start justify-start px-2 xl:max-w-[1100px]">
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
              <Link href="/podsfy-labs" legacyBehavior passHref>
                <a className="cursor-pointer font-moderat text-[13px] text-[#e3e5e8]/[0.72]">
                  Podsfy Labs
                </a>
              </Link>
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

        <p className=" mx-auto text-center font-moderat text-[11px] font-medium text-[#3f4550] md:w-[600px] ">
          Copyright © 2023 Podsfy.com a platform of subjeto inc. All rights
          reserved.
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
