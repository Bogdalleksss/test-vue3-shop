export interface ApiResponse<T = any> {
  success: boolean
  data: T
  message?: string
  errors?: Record<string, string[]>
  meta?: {
    timestamp: string
    version: string
    requestId: string
  }
}
