import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - FB Profile Viewer | Data Protection & Security",
  description:
    "Read our comprehensive privacy policy. Learn how FB Profile Viewer protects your data and ensures complete privacy when viewing Facebook profile photos.",
  keywords: "privacy policy, data protection, facebook profile viewer privacy, security",
  openGraph: {
    title: "Privacy Policy - FB Profile Viewer",
    description: "Learn how we protect your privacy and data when using our Facebook profile viewer tool.",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <Card className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>No Personal Data Storage:</strong> We do not store any personal information, Facebook URLs, or
                  profile photos on our servers. All processing happens in real-time.
                </p>
                <p>
                  <strong>Usage Analytics:</strong> We may collect anonymous usage statistics to improve our service,
                  including page views and feature usage, but this data cannot be linked to individual users.
                </p>
                <p>
                  <strong>Local Storage:</strong> We use browser local storage only to track daily API usage limits.
                  This data stays on your device and is never transmitted to our servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>The limited information we process is used solely to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide the Facebook profile photo viewing service</li>
                  <li>Maintain daily usage limits for fair access</li>
                  <li>Improve service performance and reliability</li>
                  <li>Ensure system security and prevent abuse</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement industry-standard security measures to protect our service and users. All connections use
                  HTTPS encryption, and we employ multiple security layers to prevent unauthorized access.
                </p>
                <p>
                  Since we don't store personal data or images, there's no risk of data breaches affecting your personal
                  information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use third-party APIs to fetch Facebook profile photos. These services may have their own privacy
                  policies, but we do not share any personal information with them beyond the Facebook URL you provide.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Since we don't store personal data, there's no personal information to access, modify, or delete.</p>
                <p>
                  You can clear your browser's local storage at any time to reset your daily usage counter and remove
                  any locally stored preferences.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@fbprofileviewer.com" className="text-primary hover:underline">
                    privacy@fbprofileviewer.com
                  </a>
                </p>
              </div>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
