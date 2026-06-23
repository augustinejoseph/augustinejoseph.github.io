import React from "react";

// Drop-in replacement for <img> that serves a build-generated .webp variant
// (see scripts/optimize-images.mjs) with the original as a graceful fallback.
//
// Only local /_static/*.{jpg,jpeg,png} paths get a <source>; everything else
// (external URLs, absolute site URLs, svg/gif) renders as a plain <img>.

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

function webpVariant(src: string): string | null {
  // Strip our own absolute site URL so absolute avatar/cover links still match.
  const local = src.replace(/^https?:\/\/[^/]*augustinejoseph\.github\.io/, "");
  if (!local.startsWith("/_static/")) return null;
  const m = local.match(/\.(jpe?g|png)$/i);
  if (!m) return null;
  return local.slice(0, -m[0].length) + ".webp";
}

export function Img({ src, alt, ...rest }: ImgProps) {
  const webp = webpVariant(src);
  if (!webp) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...rest} />;
  }
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} {...rest} />
    </picture>
  );
}
