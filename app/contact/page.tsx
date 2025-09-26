import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, Phone, Send, Facebook } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact Us - FB Profile Viewer | Support & Feedback",
  description:
    "Get in touch with the FB Profile Viewer team. Contact us for support, feedback, or questions about our Facebook profile photo viewing service.",
  keywords: "contact fb profile viewer, support, feedback, help, customer service",
  openGraph: {
    title: "Contact Us - FB Profile Viewer",
    description: "Get in touch with our team for support, feedback, or questions.",
    type: "website",
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with technical issues",
      contact: "kinghasanbd1@gmail.com",
      href: "mailto:kinghasanbd1@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct phone contact",
      contact: "+8801744298642",
      href: "tel:+8801744298642",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      contact: "24 hours",
    },
  ]

  const developerContacts = [
    {
      icon: Send,
      title: "Telegram",
      description: "Quick messaging",
      contact: "@hasan_x_fire",
      href: "https://t.me/hasan_x_fire",
      external: true,
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Social media contact",
      contact: "SWEETxFIRE",
      href: "https://facebook.com/SWEETxFIRE",
      external: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Meet the Developer</h2>
              <p className="text-muted-foreground">Created by Hasan Islam - Web Developer</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {developerContacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors group"
                >
                  <contact.icon
                    className="h-8 w-8 text-primary group-hover:scale-110 transition-transform"
                    strokeWidth={1}
                  />
                  <div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                    <p className="font-medium text-primary">{contact.contact}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <info.icon className="h-8 w-8 mx-auto mb-4 text-primary" strokeWidth={1} />
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                {info.href ? (
                  <Link href={info.href} className="font-medium text-primary hover:underline">
                    {info.contact}
                  </Link>
                ) : (
                  <p className="font-medium">{info.contact}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your question or feedback..."
                  className="min-h-32"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base font-medium">
                <Mail className="mr-2 h-5 w-5" strokeWidth={1} />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">How does the daily limit work?</h3>
                <p className="text-sm text-muted-foreground">
                  Each user gets 3 free requests per day. The limit resets at midnight in your local timezone.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Is my data stored?</h3>
                <p className="text-sm text-muted-foreground">
                  No, we don't store any personal data or images. Everything is processed in real-time for your privacy.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What if the tool doesn't work?</h3>
                <p className="text-sm text-muted-foreground">
                  Our multi-API system ensures high reliability. If you encounter issues, please contact our support
                  team.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Can I use this commercially?</h3>
                <p className="text-sm text-muted-foreground">
                  Our service is for personal use only. For commercial usage, please contact us for licensing options.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
