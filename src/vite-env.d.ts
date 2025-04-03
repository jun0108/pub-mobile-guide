/// <reference types="vite/client" />
// src/declarations.d.ts
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}