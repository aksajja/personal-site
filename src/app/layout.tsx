import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Akarshan Sajja",
    template: "%s | Akarshan Sajja",
  },
  description:
    "Software Engineer & AI Consultant. Ex-Amazon. Building at the intersection of full-stack development and machine learning.",
  metadataBase: new URL("https://aksajja.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
