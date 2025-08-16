import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Tharusha Perera - Computer Science Undergraduate & Software Engineer Intern",
  description:
    "Portfolio of Tharusha Perera, a Computer Science undergraduate and Software Engineer Intern focused on building intuitive, scalable, and user-centered web and mobile applications.",
  icons: {
    icon: "/new-logo.png",
    apple: "/new-logo.png",
  },
  openGraph: {
    images: [
      {
        url: "/new-logo.png",
        width: 1200,
        height: 630,
        alt: "Tharusha Perera",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
