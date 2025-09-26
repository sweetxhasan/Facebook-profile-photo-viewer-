import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { Shield, Zap, Users, Award } from "lucide-react"

export const metadata = {
  title: "About Us - FB Profile Viewer | Professional Facebook Photo Tool",
  description:
    "Learn about FB Profile Viewer, the most trusted Facebook profile photo viewing tool. Our mission is to provide secure, fast, and reliable access to profile photos.",
  keywords: "about fb profile viewer, facebook photo tool, profile picture viewer, about us",
  openGraph: {
    title: "About Us - FB Profile Viewer",
    description: "Learn about the most trusted Facebook profile photo viewing tool.",
    type: "website",
  },
}

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Active Users", value: "50K+" },
    { icon: Zap, label: "Photos Viewed", value: "2M+" },
    { icon: Shield, label: "Uptime", value: "99.9%" },
    { icon: Award, label: "User Rating", value: "4.8/5" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FB Profile Viewer</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              We're dedicated to providing the most secure, fast, and reliable Facebook profile photo viewing experience
              for users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" strokeWidth={1} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  At FB Profile Viewer, we believe that accessing Facebook profile photos should be simple, secure, and
                  reliable. Our mission is to provide users with a professional-grade tool that respects privacy while
                  delivering exceptional performance.
                </p>
                <p>
                  We've built our platform with cutting-edge technology and multiple API redundancies to ensure 99.9%
                  uptime and lightning-fast results. Every feature is designed with user experience and security as our
                  top priorities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Advanced Security</h3>
                  <p className="text-muted-foreground">
                    We never store your data or the images you view. All processing happens in real-time with complete
                    privacy protection and secure HTTPS connections.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Multi-API Reliability</h3>
                  <p className="text-muted-foreground">
                    Our redundant API system ensures maximum uptime with automatic failover protection. If one API
                    fails, another takes over seamlessly.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Lightning Performance</h3>
                  <p className="text-muted-foreground">
                    Optimized infrastructure and smart caching deliver results in seconds. Our global CDN ensures fast
                    access from anywhere in the world.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">User-Friendly Design</h3>
                  <p className="text-muted-foreground">
                    Clean, intuitive interface that works perfectly on both desktop and mobile devices. No technical
                    knowledge required.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <Card className="p-8">
                <div className="text-center space-y-4">
                  <Shield className="h-12 w-12 mx-auto text-primary" strokeWidth={1} />
                  <h3 className="text-xl font-semibold">Privacy First</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We're committed to protecting your privacy. We don't track users, store personal data, or share
                    information with third parties. Your privacy is our responsibility.
                  </p>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
