import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import SkipToButton from "@/components/SkipToButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <SkipToButton url="#main" text="Content" />
          <SkipToButton url="#footer" text="Footer" />
          <Header />
          <div className="">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
