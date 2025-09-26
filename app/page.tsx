import { Header } from "@/components/header"
import { ProfileViewer } from "@/components/profile-viewer"
import { Features } from "@/components/features"
import { Reviews } from "@/components/reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProfileViewer />
        <Features />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
