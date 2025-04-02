import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from 'next';

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ranwayenergies.com'),
  title: {
    default: "Ranway Energies Limited - Premium Fuel Station in Kenya",
    template: "%s | Ranway Energies Limited"
  },
  description: "Ranway Energies Limited offers premium quality fuel, exceptional service, and modern convenience store. Experience reliable energy solutions and superior customer service.",
  keywords: [
    "fuel station Kenya",
    "premium fuel",
    "diesel supplier",
    "petrol station",
    "kerosene supplier",
    "vehicle services",
    "convenience store",
    "quality fuel",
    "energy solutions",
    "fuel distribution"
  ],
  authors: [{ name: "Ranway Energies Limited" }],
  creator: "Ranway Energies Limited",
  publisher: "Ranway Energies Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "https://ranwayenergies.com",
    siteName: "Ranway Energies Limited",
    title: "Ranway Energies Limited - Powering the Future",
    description: "Revolutionizing the energy sector with innovative and sustainable solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ranway Energies Limited",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
