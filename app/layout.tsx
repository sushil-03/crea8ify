import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Cre8ify",
  description: "Enhance your image by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#fa4c7a" },
      }}
    >
      <html lang="en">
        {/* <body className={inter.className}>{children}</body> */}
        <body className={cn(" font-IBM_Plex antialiased", IBM_Plex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
