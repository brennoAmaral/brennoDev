import IRoot from "@/domain/types/type-root";
import HeaderApp from "@/presentation/header/header";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import "./globals.css";
import styleRootLayout from "./style-root-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brenno Dev",
  description: "teste teste",
};

export default function RootLayout({
  children,
  params: { locale }
}: IRoot) {

  const messages = useMessages();

  return (
    <html lang={locale} >
      <body className={`${inter.className} ${styleRootLayout.body} `} >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderApp />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} ''
