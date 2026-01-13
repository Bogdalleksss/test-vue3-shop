declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  import type { Router, RouteRecordRaw, RouterOptions } from 'vue-router'
  export { Router, RouteRecordRaw, RouterOptions }
  export function createRouter(options: RouterOptions): Router
  export function createWebHistory(base?: string): RouterHistory
  export function createWebHashHistory(base?: string): RouterHistory
}
