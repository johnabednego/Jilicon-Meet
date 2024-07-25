import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProvider from "./ClientProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jilicon Meet",
  description: "A fully-fledged video calling application built with Stream's React Video SDK and Next.js, featuring mic & cam controls, roles & permissions, call recordings, screen sharing, picture-in-picture, and more.",
  keywords: "video calling, Stream React Video SDK, Next.js, mic controls, cam controls, roles, permissions, call recordings, screen sharing, picture-in-picture",
  authors: [{ name: "John Abednego Jilima", url: "https://abednegoportfolio.netlify.app/" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Jilicon Meet",
    description: "Experience seamless video calling with Jilicon Meet, built with Stream's React Video SDK and Next.js. Enjoy features like mic & cam controls, roles & permissions, call recordings, screen sharing, picture-in-picture, and more.",
    url: "https://jilicon-meet.vercel.app/",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClientProvider>
            <Navbar />
            <main className="mx-auto max-w-5xl px-3 py-6">{children}</main>
          </ClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
