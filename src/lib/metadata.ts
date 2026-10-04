import type { Metadata } from "next";
import { siteImages, type SiteImageKey } from "./images";
import { siteConfig } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  /** App route without basePath, e.g. `/about` or `` for home. */
  path: string;
  imageKey?: SiteImageKey;
};

function pageUrl(path: string): string {
  if (!path || path === "/") {
    return siteConfig.url;
  }
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  imageKey = "homepageBanner",
}: PageMetadataOptions): Metadata {
  const image = siteImages[imageKey];
  const url = pageUrl(path);
  const socialTitle = `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.src],
    },
  };
}
