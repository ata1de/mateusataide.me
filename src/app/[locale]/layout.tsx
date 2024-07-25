import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter as FontSans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Provider from "@/components/provider/provider";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Mateus Ataide",
  description: "Personal web site of Mateus Ataide",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <ViewTransitions>
      <html lang="pt-br">
        <body className={cn(
          "min-h-screen bg-white text-Black font-sans antialiased",
          fontSans.variable
        )}
        >
          <NextIntlClientProvider messages={messages}>
            <Provider >
              <Header/>
              {children}
              <Footer/>
            </Provider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
