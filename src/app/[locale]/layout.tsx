import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import IRoot from "@/domain/types/type-root";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brenno Dev",
  description: "teste teste",
};

export default function RootLayout({
  children,
  params: {locale}
}:IRoot) {
  
  const messages = useMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} dark`} style={{height: '200vh'}}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}''
