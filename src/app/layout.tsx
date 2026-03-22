import type { Metadata } from 'next';
import '@/styles/globals.css';
import ClientShell from './ClientShell';

export const metadata: Metadata = {
  title: {
    default: 'Embedded Systems & IoT Product Engineering Company in Bangalore | Knowx Innovations',
    template: '%s | Knowx Innovations',
  },
  description:
    'Knowx is an embedded systems and IoT product engineering company in Bangalore offering hardware design, firmware development, PCB design, and end-to-end product solutions.',
  keywords: [
    'embedded systems company Bangalore',
    'IoT product development India',
    'hardware design services',
    'PCB design company',
    'firmware development',
    'product engineering',
  ],
  authors: [{ name: 'Knowx Innovations Pvt Ltd' }],
  metadataBase: new URL('https://www.knowxindia.com'),
  openGraph: {
    title: 'Embedded Systems & IoT Product Engineering Company | Knowx Innovations',
    description: 'From concept to certified product. Hardware design, embedded systems, firmware, IoT & AI solutions in Bangalore, India.',
    url: 'https://www.knowxindia.com',
    siteName: 'Knowx Innovations',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Knowx Innovations Pvt Ltd',
              url: 'https://www.knowxindia.com',
              logo: 'https://www.knowxindia.com/logo.png',
              description: 'Embedded systems and IoT product engineering company in Bangalore, India.',
              foundingDate: '2005',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Vijayanagar, Bangalore',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-98860-94611',
                contactType: 'sales',
                email: 'bhimsen@knowxindia.com',
              },
            }),
          }}
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
