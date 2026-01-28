'use client'
import Nav from "@/components/Nav"
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Nav featuresPath="/" resourcesPath="/resources" />
      {children}
    </SessionProvider>
  )
}