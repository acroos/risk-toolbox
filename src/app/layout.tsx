import type { Metadata } from "next"
import "bulma/css/bulma.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Risk Toolbox",
  description: "Some helpful tools for Risk players",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="section">{children}</div>
      </body>
    </html>
  )
}
