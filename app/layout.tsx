import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"

import "./globals.css"

export const metadata: Metadata = {
  title: "Samarth Sheth - Portfolio",
  description:
    "I'm a skilled software developer with experience in MongoDB, Firebase, Sanity, TypeScript and JavaScript, and expertise in frameworks like React, React Native, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
