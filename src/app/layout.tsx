import type { Metadata } from "next";
import { Montserrat, Anek_Latin, Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/hooks/useCart";
import { ProductsProvider } from "@/hooks/useProducts";

export const metadata: Metadata = {
  title: "Profile.fyi - Assignment",
  description: "Shopping cart assignment for Profile.fyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ProductsProvider>
            <Header />
            {children}
            <Toaster />
          </ProductsProvider>
        </CartProvider>
      </body>
    </html>
  );
}
