import Script from "next/script";
import { assets } from "@/configs/app";
import { PersonSchema, FAQPageSchema, ProfilePageSchema } from "@/components/seo";

export default function Head() {
  return (
    <head>
      <link
        rel="preload"
        href={assets.images.profile.me}
        as="image"
        type="image/jpeg"
        fetchPriority="high"
      />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <Script defer src="https://cloud.umami.is/script.js" data-website-id="6558351c-7013-4b45-bc6e-51f05ee79344" strategy="afterInteractive"></Script>

      <PersonSchema />
      <FAQPageSchema />
      <ProfilePageSchema />
    </head>
  );
}