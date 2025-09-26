"use server"

interface ApiResponse {
  success: boolean
  data?: string[]
  error?: string
}

export async function fetchProfilePhoto(fbUrl: string): Promise<ApiResponse> {
  const getApiKeys = (): string[] => {
    const keys = []

    if (process.env.RAPIDAPI_KEY_1) keys.push(process.env.RAPIDAPI_KEY_1)
    if (process.env.RAPIDAPI_KEY_2) keys.push(process.env.RAPIDAPI_KEY_2)
    if (process.env.RAPIDAPI_KEY_3) keys.push(process.env.RAPIDAPI_KEY_3)
    if (process.env.RAPIDAPI_KEY_4) keys.push(process.env.RAPIDAPI_KEY_4)
    if (process.env.RAPIDAPI_KEY_5) keys.push(process.env.RAPIDAPI_KEY_5)

    // Fallback to default key if no environment keys found
    if (keys.length === 0) {
      keys.push("68bf4d2085msh57e7c644647c6cep1f7259jsnb8370da6c478")
    }

    return keys
  }

  const fetchWithApiKey = async (fbUrl: string, apiKey: string): Promise<ApiResponse> => {
    try {
      const encodedUrl = encodeURIComponent(fbUrl)
      const apiUrl = `https://facebook-profile-picture-viewer.p.rapidapi.com/?fburl=${encodedUrl}`

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "facebook-profile-picture-viewer.p.rapidapi.com",
        },
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const result = await response.text()
      const data = JSON.parse(result)

      if (Array.isArray(data) && data.length > 0) {
        return { success: true, data }
      } else {
        throw new Error("No profile photo found")
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  }

  const apiKeys = getApiKeys()
  let lastError = ""

  // Try each API key until one succeeds
  for (const apiKey of apiKeys) {
    const response = await fetchWithApiKey(fbUrl, apiKey)

    if (response.success && response.data) {
      return response
    } else {
      lastError = response.error || "API request failed"
    }
  }

  // All API keys failed
  return {
    success: false,
    error: `Failed to fetch profile photo: ${lastError}`,
  }
}
