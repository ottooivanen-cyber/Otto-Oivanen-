import { site as c } from "@/content/site";

// schema.org Person with verified facts only. sameAs lists profiles that are confirmed to be Otto's
// (the joint Ikkunapojat YouTube channel is left out on purpose).
const sameAs = [
  "https://se.linkedin.com/in/otto-oivanen-71230329b",
  "https://www.instagram.com/oivanenotto/",
  "https://www.tiktok.com/@ottooivanenn",
  "https://github.com/ottooivanen-cyber",
];

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: c.hero.name,
  url: c.site.url,
  image: new URL("images/portrait.jpg", c.site.url).toString(),
  description: c.site.description,
  email: `mailto:${c.contact.email}`,
  homeLocation: { "@type": "Place", name: "Lund, Sweden" },
  nationality: { "@type": "Country", name: "Finland" },
  memberOf: { "@type": "SportsTeam", name: "Lunds VK", sport: "Volleyball" },
  knowsAbout: ["AI workers", "AI automation for businesses", "Sales", "Entrepreneurship", "Volleyball"],
  sameAs,
};

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON; the data is static and built from our own content file.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
