import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service - FB Profile Viewer | Usage Guidelines",
  description:
    "Read our terms of service for FB Profile Viewer. Understand the guidelines and conditions for using our Facebook profile photo viewing tool.",
  keywords: "terms of service, usage guidelines, facebook profile viewer terms, conditions",
  openGraph: {
    title: "Terms of Service - FB Profile Viewer",
    description: "Understand the terms and conditions for using our Facebook profile viewer tool.",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      <main className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <Card className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using FB Profile Viewer, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FB Profile Viewer is a web-based tool that allows users to view and download Facebook profile photos.
                  The service is provided "as is" and we make no warranties about its availability or functionality.
                </p>
                <p>We reserve the right to modify or discontinue the service at any time without notice.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree to use this service only for lawful purposes and in accordance with these terms:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respect the daily usage limits (3 requests per day)</li>
                  <li>Do not attempt to circumvent security measures or rate limits</li>
                  <li>Do not use the service for harassment, stalking, or any illegal activities</li>
                  <li>Respect the privacy and rights of Facebook users</li>
                  <li>Do not attempt to overload or disrupt our servers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The FB Profile Viewer service, including its design, code, and functionality, is owned by us and
                  protected by intellectual property laws.
                </p>
                <p>
                  Profile photos accessed through our service remain the property of their respective owners and
                  Facebook.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We shall not be liable for any direct, indirect, incidental, special, or consequential damages
                  resulting from the use or inability to use our service.
                </p>
                <p>
                  We do not guarantee the accuracy, completeness, or availability of profile photos accessed through our
                  service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to terminate or suspend access to our service immediately, without prior notice,
                  for any reason, including breach of these terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting on this page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@fbprofileviewer.com" className="text-primary hover:underline">
                    legal@fbprofileviewer.com
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
