/*---------------------------------------------------------------------------------------------
 *
 *  Copyright (c) Podsfy.com. All rights reserved.
 *
 *--------------------------------------------------------------------------------------------*/

// eslint-disable-next-line import/extensions
import "styles/fonts.css";
// eslint-disable-next-line import/extensions
import "styles/globals.css";

import Image from "next/image";
/* eslint-disable-next-line import/no-absolute-path, import/extensions */
import backgroundImage from "/public/bg.png";

export const siteConfig = {
  name: "Podsfy.com",
  description:
    "Podsfy is a platform for podcast reviews and rankings of podcasts from all streaming services.",
  url: "https://www.podsfy.com",
  ogImage: "https://www.podsfy.com/og.jpg",
  links: {
    twitter: "https://twitter.com/podsfy",
  },
};

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "podsfy",
      url: "https://podsfy.com",
    },
  ],
  creator: "podsfy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/og.jpg"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@podsfy",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className=" h-full w-full bg-[#030303] bg-opacity-[100%]">
        <div className="items  z-0 items-center justify-items-center overflow-x-hidden">
          <div className="relative overflow-x-hidden bg-[#0D0E12]">
            <Image
              className="absolute bg-[#0D0E12] object-cover brightness-[60%] md:top-[50px] md:rotate-[8deg] md:scale-[120%] xl:top-[-120px] xl:translate-x-[25px] xl:scale-x-[105%] xl:scale-y-[100%]"
              src={backgroundImage}
              height={1080}
              width={1920}
              alt="Podcasts"
              priority
              quality={1}
            ></Image>
            <div className="backdrop-blur-[8px] backdrop-brightness-[50%]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
