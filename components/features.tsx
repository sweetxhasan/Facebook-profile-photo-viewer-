import { Shield, Zap, Download, Clock, Key, Globe } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is never stored. All processing happens in real-time with complete privacy protection.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get profile photos instantly with our optimized API system and advanced caching technology.",
    },
    {
      icon: Download,
      title: "High Quality Downloads",
      description: "Download original quality profile photos in full resolution without any compression.",
    },
    {
      icon: Clock,
      title: "Daily Limits",
      description: "Fair usage policy with 3 daily requests to ensure service availability for everyone.",
    },
    {
      icon: Key,
      title: "Multi-API System",
      description: "Redundant API keys ensure 99.9% uptime with automatic failover protection.",
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Works with all Facebook profile types and supports international profiles worldwide.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to view and download Facebook profile photos with ease and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
