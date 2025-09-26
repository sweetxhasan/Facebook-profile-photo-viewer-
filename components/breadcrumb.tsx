"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  if (pathname === "/") return null

  const breadcrumbItems = [
    { href: "/", label: "Home", icon: Home },
    ...segments.map((segment, index) => ({
      href: `/${segments.slice(0, index + 1).join("/")}`,
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " "),
    })),
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4 px-4 border-b">
      <div className="container mx-auto flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center space-x-2">
            {index > 0 && <ChevronRight className="h-4 w-4" strokeWidth={1} />}
            <Link
              href={item.href}
              className={`flex items-center gap-1 hover:text-foreground transition-colors ${
                index === breadcrumbItems.length - 1 ? "text-foreground font-medium" : ""
              }`}
            >
              {item.icon && <item.icon className="h-4 w-4" strokeWidth={1} />}
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}
