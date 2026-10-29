import type { ReactNode } from "react";

export function Section({
  id,
  heading,
  index,
  aside,
  children,
}: {
  id: string;
  heading: string;
  index: string;
  aside?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-16 md:py-28">
        <div className="reveal">
          <p className="font-mono text-xs tracking-widest text-faint" aria-hidden="true">
            {index}
          </p>
          <h2 id={headingId} className="mt-2 text-2xl font-light tracking-tight text-fg sm:text-3xl">
            {heading}
          </h2>
          {aside && <p className="mt-3 text-sm leading-relaxed text-muted">{aside}</p>}
        </div>
        <div className="reveal min-w-0">{children}</div>
      </div>
    </section>
  );
}
