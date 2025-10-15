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
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <div className="section">{children}</div>
      </body>
    </html>
  )
}
