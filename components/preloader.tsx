"use client"

import { useEffect, useState } from "react"
import { Facebook } from "lucide-react"

interface PreloaderProps {
  onComplete?: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  const loadingSteps = [
    { text: "Initializing...", duration: 500 },
    { text: "Loading Components...", duration: 600 },
    { text: "Setting up API...", duration: 400 },
    { text: "Preparing Interface...", duration: 500 },
    { text: "Almost Ready...", duration: 300 },
  ]

  useEffect(() => {
    let currentStep = 0
    let currentProgress = 0

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 12 + 8
      if (currentProgress > 100) currentProgress = 100
      setProgress(currentProgress)

      if (currentStep < loadingSteps.length && currentProgress > (currentStep + 1) * 20) {
        setLoadingText(loadingSteps[currentStep].text)
        currentStep++
      }

      if (currentProgress >= 100) {
        clearInterval(progressInterval)
        setTimeout(() => {
          onComplete?.()
        }, 800)
      }
    }, 120)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 w-screen h-screen bg-background z-[9999] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col items-center space-y-4 md:space-y-8">
        {/* Logo Animation - Made responsive with smaller sizes on mobile */}
        <div className="relative">
          <div className="w-16 h-16 md:w-28 md:h-28 border-2 md:border-4 border-primary bg-primary flex items-center justify-center shadow-2xl">
            <Facebook className="h-8 w-8 md:h-14 md:w-14 text-primary-foreground" strokeWidth={1} />
          </div>
          <div className="absolute -inset-2 md:-inset-3 border border-primary/40 md:border-2 animate-pulse"></div>
          <div className="absolute -inset-3 md:-inset-6 border border-primary/20 animate-ping"></div>
          <div className="absolute -inset-4 md:-inset-8 border border-primary/10 animate-pulse delay-500"></div>
        </div>

        {/* Brand Name - Made text responsive with smaller sizes on mobile */}
        <div className="text-center space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold tracking-wider text-foreground">FB PROFILE VIEWER</h1>
          <p className="text-sm md:text-xl text-muted-foreground font-medium">Professional Facebook Photo Tool</p>
        </div>

        {/* Progress Bar - Made width and spacing responsive */}
        <div className="w-full max-w-xs md:w-[400px] md:max-w-sm space-y-3 md:space-y-5">
          <div className="w-full bg-muted h-3 md:h-4 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm md:text-base text-muted-foreground">
            <span className="font-semibold">{loadingText}</span>
            <span className="font-bold text-primary">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Dots - Made dots smaller on mobile */}
        <div className="flex space-x-2 md:space-x-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 md:w-4 md:h-4 bg-primary animate-bounce shadow-lg"
              style={{
                animationDelay: `${i * 0.12}s`,
                animationDuration: "1.2s",
                animationTimingFunction: "ease-in-out",
              }}
            ></div>
          ))}
        </div>

        {/* Loading Text - Made text smaller on mobile */}
        <div className="text-xs md:text-sm text-muted-foreground/80 font-mono tracking-wide">
          <span className="animate-pulse">●</span> Loading advanced interface...
        </div>
      </div>

      {/* Background Animation - Made background elements smaller and less on mobile */}
      <div className="absolute inset-0 opacity-3 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-40 md:h-40 border border-primary/15 md:border-2 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 md:w-32 md:h-32 border border-primary/10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 md:w-24 md:h-24 border border-primary/15 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 md:w-28 md:h-28 border border-primary/10 animate-pulse delay-700"></div>
        <div className="absolute top-1/6 right-1/6 w-10 h-10 md:w-20 md:h-20 border border-primary/15 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-1/2 w-8 h-8 md:w-16 md:h-16 border border-primary/10 animate-pulse delay-900"></div>
      </div>
    </div>
  )
}
