import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "Neeraj Ram | Bangalore Product Manager – EV, SaaS & Growth Strategy";
const DEFAULT_DESCRIPTION =
  "Bangalore-based Product Manager specializing in EV infrastructure, SaaS growth strategy, and product-led adoption. Open to collaboration with Bangalore startups and technology teams.";
const DEFAULT_KEYWORDS =
  "Bangalore Product Manager, Bangalore PM, EV Product Strategy, SaaS Product Manager, Growth Strategy, User Research, Product Design, Bangalore, India";
const DEFAULT_URL = "https://neerajram.in/";
const DEFAULT_IMAGE = "https://neerajram.in/image.png";

const getCurrentUrl = () =>
  typeof window === "undefined" ? DEFAULT_URL : window.location.href;

const structuredData = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Neeraj Ram",
  description,
  url: DEFAULT_URL,
  telephone: "+916282587126",
  email: "neo.maddison17@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bangalore, Karnataka",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN"
  },
  areaServed: ["Bangalore", "Karnataka", "India"],
  sameAs: ["https://www.linkedin.com/in/neerajram17"],
  image: DEFAULT_IMAGE,
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${DEFAULT_URL}#contact`,
    availableLanguage: "English"
  }
});

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  canonical?: string;
};

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  canonical,
}: SEOProps) {
  const pageUrl = canonical ?? getCurrentUrl();

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Neeraj Ram" />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Neeraj Ram – Bangalore Product Manager" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Neeraj Ram Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(structuredData(description))}</script>
    </Helmet>
  );
}
