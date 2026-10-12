import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Large modal that hosts either a live site (iframe) or a product video.
export function PreviewDialog({ preview, onClose }) {
  return (
    <Dialog open={Boolean(preview)} onOpenChange={(open) => !open && onClose()}>
      {preview ? (
        <DialogContent className="max-w-6xl p-3 sm:p-4" label={`${preview.name} preview`} onClose={onClose}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pb-3 pl-2 pr-12 pt-1">
            <h3 className="font-display text-lg font-semibold tracking-tight">{preview.name}</h3>
            {preview.href ? (
              <a href={preview.href} target="_blank" rel="noopener noreferrer" className="link-rule font-mono text-xs">
                {preview.url}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : (
              <span className="font-mono text-xs text-muted">Product walkthrough</span>
            )}
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-[rgb(20_19_16)]">
            {preview.video ? (
              <video
                src={preview.video.src}
                poster={preview.video.poster}
                className="aspect-video w-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            ) : (
              <>
                <p className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white/60">
                  Loading the live site…
                </p>
                <iframe
                  src={preview.href}
                  title={`${preview.name} — live site`}
                  className="relative h-[72vh] w-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </>
            )}
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
