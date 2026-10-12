import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

// A browser-window mock around a real screenshot.
export function BrowserFrame({
  url,
  src,
  alt,
  className,
  imageClassName,
  aspectClassName = "aspect-[16/10]",
  eager = false,
  toolbar,
  children,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("overflow-hidden rounded-xl border border-ink/15 bg-raised shadow-frame", className)}>
      <div className="flex h-9 items-center gap-3 border-b border-ink/10 px-3.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-ink/20" />
          <i className="h-2 w-2 rounded-full bg-ink/20" />
          <i className="h-2 w-2 rounded-full bg-ink/20" />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-[0.6875rem] tracking-wide text-muted">{url}</span>
        {toolbar}
      </div>
      <div className={cn("relative overflow-hidden bg-ink/[0.04]", aspectClassName)}>
        {children ??
          (failed ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-muted">
              <ImageOff className="h-5 w-5" aria-hidden="true" />
              <span className="font-mono text-xs">Preview unavailable</span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              width={1440}
              height={900}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              onError={() => setFailed(true)}
              className={cn("h-full w-full object-cover object-top", imageClassName)}
            />
          ))}
      </div>
    </figure>
  );
}

export function PhoneFrame({ src, alt, className }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[1.75rem] border-[5px] border-[rgb(20_19_16)] bg-[rgb(20_19_16)] shadow-lift",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={780}
        height={1600}
        loading="lazy"
        decoding="async"
        className="aspect-[390/800] w-full rounded-[1.4rem] object-cover object-top"
      />
    </figure>
  );
}
