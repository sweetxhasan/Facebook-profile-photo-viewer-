"use client"

import { Facebook, Mail, Shield, FileText, Info, Home, ExternalLink, Heart, Phone, Send } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    setIsVisible(true)
  }, [])

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { href: "/", icon: Home, label: "Home" },
        { href: "/about", icon: Info, label: "About" },
        { href: "/contact", icon: Mail, label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", icon: Shield, label: "Privacy Policy" },
        { href: "/terms", icon: FileText, label: "Terms of Service" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/sitemap.xml", icon: FileText, label: "Sitemap", external: true },
        { href: "mailto:kinghasanbd1@gmail.com", icon: Mail, label: "Support", external: true },
      ],
    },
  ]

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Photos Viewed", value: "2M+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Countries", value: "150+" },
  ]

  return (
    <footer
      className={`relative bg-muted/50 border-t transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Stats Section */}
      <div className="border-b bg-background/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Facebook className="h-6 w-6 text-blue-500" strokeWidth={1} />
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full animate-ping"></div>
              </div>
              <span className="text-lg font-semibold">FB PROFILE VIEWER</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most advanced Facebook profile photo viewer tool. View and download profile photos with ease and
              security.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-green-500" strokeWidth={1} />
              <span>100% Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Service Online</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                      {link.label}
                      {link.external && <ExternalLink className="h-3 w-3" strokeWidth={1} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Developer</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-foreground mb-1">Hasan Islam</div>
                <div className="text-muted-foreground">Web Developer</div>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://t.me/hasan_x_fire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Send className="h-4 w-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                    Telegram
                    <ExternalLink className="h-3 w-3" strokeWidth={1} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:kinghasanbd1@gmail.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+8801744298642"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                    Phone
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com/SWEETxFIRE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                    Facebook
                    <ExternalLink className="h-3 w-3" strokeWidth={1} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">© {currentYear} FB Profile Viewer. All rights reserved.</div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" strokeWidth={1} />
                <span>for the community</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              This tool is not affiliated with Facebook, Inc. Facebook is a trademark of Meta Platforms, Inc. We respect
              user privacy and do not store any personal data or images.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-primary/20 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>
      </div>
    </footer>
  )
}
