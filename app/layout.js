import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CursorSmoke from '../components/CursorSmoke';

export const metadata = {
  metadataBase: new URL('https://www.zenexio.pro'),
  icons: {
    icon: '/images/ZEN LOGO WHITE.png',
    apple: '/images/ZEN LOGO WHITE.png'
  },
  robots: 'index, follow'
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zenexio',
  description: 'Creative agency in Dubai, UAE and India offering graphic design, web development, digital marketing, and brand strategy.',
  url: 'https://www.zenexio.pro',
  logo: 'https://www.zenexio.pro/images/zen-wordmark.png',
  email: 'info@zenexio.pro',
  telephone: '+971503848523',
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' }
  ],
  sameAs: [],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy' } }
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
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <CursorSmoke />
      </body>
    </html>
  );
}
