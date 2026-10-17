import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maviskao.framer.website"),
  title: "Mavis Kao — Portfolio website",
  description:
    "Mavis Kao is a UX & Product Designer with experience in fintech, startups, and global companies. Explore her portfolio showcasing user-centered design, product strategy, and digital innovation.",
  openGraph: {
    title: "Mavis Kao — Portfolio website",
    description:
      "Mavis Kao is a UX & Product Designer with experience in fintech, startups, and global companies.",
    images: ["/images/hero-avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
