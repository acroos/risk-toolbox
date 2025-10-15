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
      <body style={{ margin: 0, padding: 0, height: "100vh" }}>
        <div style={{ height: "100vh", padding: "1.5rem" }}>{children}</div>
      </body>
    </html>
  )
}
