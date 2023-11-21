/*---------------------------------------------------------------------------------------------
 *
 *  Copyright (c) Podsfy.com. All rights reserved.
 *
 *--------------------------------------------------------------------------------------------*/

// eslint-disable-next-line import/extensions
import "styles/globals.css";

import localFont from "next/font/local";
import mergeClasses from "utils/mergeClasses/mergeClasses";

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

// Font files can be colocated inside of `pages`
export const moderat = localFont({
  src: [
    {
      path: "../../public/fonts/podsfy-first-regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/podsfy-first-regular.woff",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-moderat",
  adjustFontFallback: false,
  display: "swap",
  preload: true,
});

export const spaceGrotesk = localFont({
  src: "../../public/fonts/podsfy-second-bold.woff2",
  variable: "--font-space-grotesk",
});

export const visuelt = localFont({
  src: "../../public/fonts/podsfy-third-regular.woff2",
  weight: "400",
  adjustFontFallback: false,
  display: "swap",
  preload: true,
  variable: "--font-visuelt",
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
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
      <body className="h-full w-full overflow-x-hidden bg-[#121212] bg-opacity-[100%] backdrop-blur-[8px] backdrop-brightness-[80%]">
        <main
          className={mergeClasses(
            visuelt.variable,
            moderat.variable,
            spaceGrotesk.variable,
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
