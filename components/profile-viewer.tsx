"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, LinkIcon, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import Image from "next/image"
import { fetchProfilePhoto } from "@/app/actions/fetch-profile"

interface ApiResponse {
  success: boolean
  data?: string[]
  error?: string
}

export function ProfileViewer() {
  const [url, setUrl] = useState("")
  const [isValidUrl, setIsValidUrl] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [dailyRequests, setDailyRequests] = useState(0)
  const [lastRequestDate, setLastRequestDate] = useState<string | null>(null)

  const DAILY_LIMIT = 3

  // Load daily request count from localStorage
  useEffect(() => {
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem("fb-viewer-date")
    const storedCount = localStorage.getItem("fb-viewer-count")

    if (storedDate === today && storedCount) {
      setDailyRequests(Number.parseInt(storedCount))
    } else {
      // Reset count for new day
      setDailyRequests(0)
      localStorage.setItem("fb-viewer-date", today)
      localStorage.setItem("fb-viewer-count", "0")
    }
    setLastRequestDate(storedDate)
  }, [])

  // Validate Facebook URL
  useEffect(() => {
    const facebookUrlPattern = /^https?:\/\/(www\.)?(facebook\.com|fb\.com)\/.+/i
    setIsValidUrl(facebookUrlPattern.test(url))
    setError(null)
  }, [url])

  const handleFetchPhoto = async () => {
    if (!isValidUrl) {
      setError("Please enter a valid Facebook profile URL")
      return
    }

    if (dailyRequests >= DAILY_LIMIT) {
      setError("Daily request limit reached. Please try again tomorrow.")
      return
    }

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetchProfilePhoto(url)

      if (response.success && response.data) {
        setResult(response.data[0])

        // Update daily request count
        const newCount = dailyRequests + 1
        setDailyRequests(newCount)
        localStorage.setItem("fb-viewer-count", newCount.toString())
      } else {
        setError(response.error || "Failed to fetch profile photo")
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!result) return

    try {
      const response = await fetch(result)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "facebook-profile-photo.jpg"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      setError("Failed to download image")
    }
  }

  const remainingRequests = DAILY_LIMIT - dailyRequests

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Facebook Profile Photo Viewer</h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            View and download Facebook profile photos easily with our advanced tool. Simply paste the profile URL and
            get instant access to high-quality images.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <div className="space-y-6">
            {/* Daily Limit Info */}
            <div className="flex items-center justify-between p-4 bg-muted">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground" strokeWidth={1} />
                <span className="text-sm font-medium">Daily Requests</span>
              </div>
              <div className="text-sm">
                <span className={remainingRequests > 0 ? "text-green-500" : "text-red-500"}>
                  {remainingRequests} remaining
                </span>
                <span className="text-muted-foreground"> / {DAILY_LIMIT}</span>
              </div>
            </div>

            {/* URL Input */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <LinkIcon className="h-5 w-5 text-muted-foreground" strokeWidth={1} />
                <label htmlFor="facebook-url" className="text-sm font-medium">
                  Facebook Profile URL
                </label>
              </div>

              <div className="relative">
                <Input
                  id="facebook-url"
                  type="url"
                  placeholder="https://www.facebook.com/profile.php?id=100070219120286"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={`pr-10 ${
                    url && !isValidUrl ? "border-red-500" : url && isValidUrl ? "border-green-500" : ""
                  }`}
                />
                {url && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isValidUrl ? (
                      <CheckCircle className="h-5 w-5 text-green-500" strokeWidth={1} />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" strokeWidth={1} />
                    )}
                  </div>
                )}
              </div>

              {url && !isValidUrl && <p className="text-sm text-red-500">Please enter a valid Facebook profile URL</p>}
            </div>

            {/* Fetch Button */}
            <Button
              onClick={handleFetchPhoto}
              disabled={!isValidUrl || isLoading || dailyRequests >= DAILY_LIMIT}
              className="w-full h-12 text-base font-medium"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" strokeWidth={1} />
                  Fetching Profile Photo...
                </>
              ) : dailyRequests >= DAILY_LIMIT ? (
                "Daily Limit Reached"
              ) : (
                "Fetch Profile Photo"
              )}
            </Button>

            {/* Error Display */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" strokeWidth={1} />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Result Display */}
            {result && (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Profile Photo Found</h3>
                  <div className="relative inline-block">
                    <Image
                      src={result || "/placeholder.svg"}
                      alt="Facebook Profile Photo"
                      width={300}
                      height={300}
                      className="mx-auto border"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>

                <Button onClick={handleDownload} className="w-full h-12 text-base font-medium">
                  <Download className="mr-2 h-5 w-5" strokeWidth={1} />
                  Download Image
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Usage Instructions */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold">Copy Profile URL</h3>
            <p className="text-sm text-muted-foreground">Copy the Facebook profile URL from your browser</p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold">Paste & Fetch</h3>
            <p className="text-sm text-muted-foreground">Paste the URL and click the fetch button</p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold">Download Image</h3>
            <p className="text-sm text-muted-foreground">View and download the high-quality profile photo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
