import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const satoshiRegular = localFont({
//   src: "./fonts/SatoshiRegular.woff",
//   variable: "--font-satoshi-regular",
//   weight: "400",
// });
// const satoshiBold = localFont({
//   src: "./fonts/SatoshiBold.woff",
//   variable: "--font-satoshi-bold",
//   weight: "700",
// });
// const satoshiMedium = localFont({
//   src: "./fonts/SatoshiMedium.woff",
//   variable: "--font-satoshi-medium",
//   weight: "500",
// });

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS + TypeScript",
  description: "NextJS, tailwindcss & shadcn template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
