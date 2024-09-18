import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Expert care for Pregnancy, Postpartum & Sexual Health | Eleva Care",
  description:
    "Eleva Care: Empowering growth, embracing care. Expert care for pregnancy, postpartum, menopause, and sexual health.",
  openGraph: {
    type: "website",
    url: "https://eleva.care",
    siteName: "Eleva Care",
    title: "Expert care for Pregnancy, Postpartum & Sexual Health | Eleva Care",
    description:
      "Eleva Care: Empowering growth, embracing care. Expert care for pregnancy, postpartum, menopause, and sexual health.",
    images: [
      {
        url: "https://eleva.care/img/eleva-care-share.png",
        width: 1200,
        height: 680,
        alt: "Eleva Care",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
