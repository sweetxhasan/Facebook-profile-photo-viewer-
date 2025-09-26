"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Preloader } from "./preloader"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setIsLoading(false)
    }

    const minLoadTime = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds minimum

    return () => {
      clearTimeout(minLoadTime)
    }
  }, [])

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />
  }

  return <>{children}</>
}
