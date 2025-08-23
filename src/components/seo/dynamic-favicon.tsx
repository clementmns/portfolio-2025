import { generateFaviconDataURL } from "@/lib/favicon-generator";

export default async function DynamicFavicon() {
  const faviconDataURL = await generateFaviconDataURL();

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={faviconDataURL} />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="16x16"
        href={faviconDataURL}
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="32x32"
        href={faviconDataURL}
      />
      <link rel="apple-touch-icon" sizes="180x180" href={faviconDataURL} />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="192x192"
        href={faviconDataURL}
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="512x512"
        href={faviconDataURL}
      />
    </>
  );
}
