import Script from 'next/script';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CursorSmoke from '../components/CursorSmoke';
import CookieNotice from '../components/CookieNotice';

const GA_MEASUREMENT_ID = 'G-HQJWLWM4JR';

export const metadata = {
  metadataBase: new URL('https://www.zenexio.pro'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/images/apple-touch-icon.png',
    shortcut: '/favicon.svg'
  },
  robots: 'index, follow'
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.zenexio.pro/#organization',
  name: 'Zenexio',
  description: 'Zenexio is a full-service creative agency in Dubai, UAE, with a delivery team in India, offering graphic design, web development, digital marketing, and brand strategy. Founded in 2017, Zenexio has delivered 500+ projects with transparent pricing and full client ownership of deliverables.',
  slogan: 'Design Beyond Imagination',
  foundingDate: '2017',
  url: 'https://www.zenexio.pro',
  logo: 'https://www.zenexio.pro/images/zen-wordmark.png',
  image: 'https://www.zenexio.pro/images/zen-wordmark.png',
  email: 'info@zenexio.pro',
  telephone: '+971503848523',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE'
  },
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' }
  ],
  sameAs: [
    'https://www.instagram.com/zenexio.pro/',
    'https://www.facebook.com/profile.php?id=61560461255608',
    'https://www.tiktok.com/@zenexio.pro',
    'https://www.youtube.com/@zenexioGraphics'
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design', description: 'Brand identity, print, and visual design services.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', description: 'Custom website and web application development.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', description: 'SEO, social media, and paid campaign management.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy', description: 'Positioning, messaging, and brand identity systems.' } }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Zenexio offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zenexio offers graphic design, web development, digital marketing, brand strategy, and motion design as a full-service creative agency.' }
    },
    {
      '@type': 'Question',
      name: 'Where is Zenexio located and who do they serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zenexio is based in Dubai, UAE, with a delivery team in India, and serves clients across the UAE and India.' }
    },
    {
      '@type': 'Question',
      name: 'How much do Zenexio’s services cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every project starts with a discovery conversation and a transparent, scoped quote — pricing depends on scope, so the fastest way to get an accurate number is to request a quote at zenexio.pro/contact.' }
    },
    {
      '@type': 'Question',
      name: 'How fast does Zenexio respond to inquiries?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zenexio replies to every inquiry within one business day.' }
    },
    {
      '@type': 'Question',
      name: 'Do clients own their design and code files?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Zenexio provides fully editable source files and complete usage rights to clients on every project.' }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/main.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Nav />
        {children}
        <Footer />
        <CursorSmoke />
        <CookieNotice />
      </body>
    </html>
  );
}
