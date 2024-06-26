import { cn } from "@/lib/utils";
import React, { VideoHTMLAttributes } from "react";

export default function Video({
  src,
  className,
  fallbackImage,
  ...props
}: {
  fallbackImage?: string;
  src?: string;
  className?: string;
} & VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <div className={cn("")}>
      <video {...props} loop playsInline muted className={cn("", className)}>
        <source src={src} type="video/mp4" />
        <img
          src={fallbackImage || "/images/hero-fallback.png"}
          title="Your browser does not support the <video> tag"
          alt="Fallback image"
        ></img>
      </video>
    </div>
  );
}
