import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Gochi_Hand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishi",
  description:
    "Just a student interest in development!",
  keywords: [
    "developer",
    "backend developer",
    "full stack developer",
    "flutter developer",
  ],
  authors: [{ name: "Rishi" }],
  openGraph: {
    title: "Rishi",
    description: "Just a student interest in development!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${gochiHand.variable}`}
      suppressHydrationWarning
    >
      <body className={`${bricolageGrotesque.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
