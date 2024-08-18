import { Inter as FontSans } from "next/font/google"

import './globals.css'
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'DocuSync',
  description: 'A real-time document collaboration tool that lets teams co-author, edit, and share content seamlessly. Perfect for enhancing productivity and simplifying teamwork on any document.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#3371ff',
          fontSize: '16px',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          { children }
        </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
