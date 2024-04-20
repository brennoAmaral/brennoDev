import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import IRoot from "@/domain/types/type-root";
import { NextIntlClientProvider, useMessages } from "next-intl";
import HeaderApp from "@/presentation/header/header";
import BaseLayout from "@/presentation/base-layout/base-layout";
import styleRootLayout from "./style-layout";

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
          <BaseLayout>
            {children}
          </BaseLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} ''
