import { Inter, IBM_Plex_Sans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibmplexsans",
});

export const metadata: Metadata = {
  title: "Country APP",
  description: "Fetching country information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
