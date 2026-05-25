const baseUrl = import.meta.env.VITE_API_BASE_URL

export class ApiError extends Error {
  constructor(message, { status, body } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.body = body
  }
}

export async function request(path, { signal, ...init } = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: { Accept: 'application/json' },
    signal,
    ...init,
  })

  const payload = response.status === 204 ? null : await response.json().catch(() => null)

  if (!response.ok) {
    throw new ApiError(payload?.error?.message ?? response.statusText, {
      status: response.status,
      body: payload,
    })
  }

  return payload?.data ?? null
}
