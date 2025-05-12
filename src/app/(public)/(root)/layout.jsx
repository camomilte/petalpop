// Import styling
import "../globals.css";
import { Gabriela, Caprasimo, Quicksand, Arvo } from 'next/font/google';

// Import components
import Footer from "@/app/(public)/components/footer";
import Navbar from "@/app/(public)/components/Navbar";

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
      <body className={`bg-cream ${gabriela.variable} ${caprasimo.variable} ${quicksand.variable} ${arvo.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
