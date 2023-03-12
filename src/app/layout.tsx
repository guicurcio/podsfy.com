// eslint-disable-next-line import/extensions
import "styles/fonts.css"
// eslint-disable-next-line import/extensions
import "styles/globals.css"

export const siteConfig = {
  name: "Podsfy",
  description:
    "Podsfy is a platform for podcast reviews and rankings of podcasts from all streaming services.",
  url: "https://www.podsfy.com",
  ogImage: "https://www.podsfy.com/og.jpg",
  links: {
    twitter: "https://twitter.com/podsfy",
  },
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className=" h-full w-full bg-[#030303] bg-opacity-[100%]">
        <div className="items  z-0 items-center justify-items-center overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
