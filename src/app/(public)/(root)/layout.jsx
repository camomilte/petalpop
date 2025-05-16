// Import styling
import "../globals.css";
import { Gabriela, Caprasimo, Quicksand, Arvo } from 'next/font/google';

// Import components
import Footer from "@/app/(public)/components/footer";
import Navbar from "@/app/(public)/components/navbar";

// Metadata
export const metadata = {
  title: {
    default: 'Petal Pop - Blossoming together, one petal at a time',
    template: '%s | Petal Pop',
  },
  description: "Website for flower and gardening events",
};

// Custom fonts
const gabriela = Gabriela ({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gabriela',
});

const caprasimo = Caprasimo ({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caprasimo'
});

const quicksand = Quicksand ({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

const arvo = Arvo ({
  subsets: ['latin'],
  weight: ['400']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`bg-cream ${gabriela.variable} ${caprasimo.variable} ${quicksand.variable} ${arvo.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
