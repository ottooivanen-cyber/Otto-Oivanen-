// Shape of all page text. Everything the page shows comes from content/site.ts.

export type Link = { label: string; href: string };

export type Photo = {
  /** File in /public/images, e.g. "/images/portrait.jpg". */
  src: string;
  alt: string;
  /** Photographer / owner, shown under the photo. Leave empty for your own photos. */
  credit?: string;
  /** CSS object-position for cropping, e.g. "30% 50%". */
  position?: string;
};

export type Stat = { value: string; label: string };

export type Project = {
  name: string;
  period: string;
  role: string;
  summary: string;
  story: string[];
  stats: Stat[];
  /** Your own honest take: how it went, what you learned. */
  takeaway?: string;
  /** Short list of smaller builds, shown as a grid. */
  builds?: { name: string; text: string; href?: string }[];
  status: string;
  tags: string[];
  links: Link[];
  photo?: Photo;
};

export type Content = {
  site: { title: string; description: string; url: string };
  nav: { home: string; skip: string; menu: string; close: string; items: Link[] };
  hero: {
    eyebrow: string;
    name: string;
    tagline: string;
    primaryCta: Link;
    secondaryCta: Link;
    photo?: Photo;
  };
  now: { heading: string; intro: string; items: { label: string; text: string }[] };
  projects: { heading: string; intro: string; items: Project[] };
  thinking: { heading: string; intro: string; items: { quote: string; context: string }[]; photo?: Photo };
  goals: { heading: string; items: string[] };
  experience: {
    heading: string;
    facts?: { label: string; value: string }[];
    items: { period: string; role: string; org: string }[];
  };
  volleyball: { heading: string; text: string; facts: { label: string; value: string }[]; photo?: Photo };
  contact: {
    heading: string;
    body: string;
    email: string;
    profilesHeading: string;
    profiles: Link[];
  };
  footer: { credits: string[]; copyright: string };
};
