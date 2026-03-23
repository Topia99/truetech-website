import { useEffect } from 'react';
import { siteConfig } from './config/site';
import { HomePage } from './pages/HomePage';

export default function App() {
  useEffect(() => {
    document.title =
      `Phone Repair in Irvine | iPhone Screen & Battery Replacement | ${siteConfig.businessName}`;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content =
      'Fast and affordable phone repair in Irvine. We fix iPhone screens, batteries, and charging issues with same-day service and warranty.';
  }, []);

  return <HomePage />;
}
