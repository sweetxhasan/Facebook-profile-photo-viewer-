"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Facebook, Home, Info, Shield, FileText, Mail } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/privacy", icon: Shield, label: "Privacy" },
    { href: "/terms", icon: FileText, label: "Terms" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              <Menu className="h-5 w-5" strokeWidth={1} />
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <Facebook className="h-6 w-6 text-blue-500" strokeWidth={1} />
              <span className="text-lg font-semibold">FB PROFILE VIEWER</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="h-4 w-4" strokeWidth={1} />
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-background border-r p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Facebook className="h-6 w-6 text-blue-500" strokeWidth={1} />
                <span className="text-lg font-semibold">FB PROFILE VIEWER</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" strokeWidth={1} />
              </Button>
            </div>

            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" strokeWidth={1} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
