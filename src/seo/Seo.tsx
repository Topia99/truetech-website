import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
};

export function Seo({
  title,
  description,
  canonical,
  robots = 'index,follow',
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
    </Helmet>
  );
}
