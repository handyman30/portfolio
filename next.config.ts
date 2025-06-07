import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'media.licdn.com',
      'www.health.gov.au',
      'www.nationalretail.org.au',
      'www.jbhifi.com.au',
      'www.4dmedical.com',
      'apps.apple.com',
      'is1-ssl.mzstatic.com',
      'studyadelaide.com',
      'sportsconnect-client-327656444e46.herokuapp.com',
      'upload.wikimedia.org',
      'alhi.com.au',
      'www.nationalproductreview.com.au'
    ],
  },
};

export default nextConfig;
