// Минимальные декларации для process
declare namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV?: 'development' | 'production' | 'test'
      VUE_APP_API_URL?: string
      VUE_APP_NAME?: string
      VUE_APP_VERSION?: string
      VUE_APP_DEBUG?: string
      [key: string]: string | undefined
    }
  }
}

declare const process: NodeJS.Process
