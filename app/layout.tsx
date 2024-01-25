import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stablecoin Wallet",
  description: "A simplified wallet for stablecoins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
