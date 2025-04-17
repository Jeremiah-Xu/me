import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { yourFont } from './fonts'
import { unboundFont } from './fonts'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Jeremiah XU's PersonalWebsite",
  description: "Futuristic project showcase in cyberpunk style",
  icons: {
    icon: "/logo10.png", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={yourFont.variable}>
      <body className="bg-black text-white">
        <div className="w-[80%] mx-[10%]">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}