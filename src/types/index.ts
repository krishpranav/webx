export type AppType = 'search' | 'content' | 'favorites' | 'settings'

export interface App {
  id: string
  title: string
  subtitle: string
  prompt: string
  tasks: Record<string, string>
  html: string
  text: Record<string, string>
  script: string
  data: Record<string, any>
}

export interface Tab {
  isActive: boolean
  isFavorite: boolean
  type: AppType
  isNew: boolean
}

export type AppTab = App & Tab

export interface Link {
  title: string
  alt: string
}

export interface Settings {
  coreVendor: string
  huggingFaceKey: string
  huggingFaceModel: string
  openAIKey: string
  openAIModel: string
  customTasksPrompt: string
  customHtmlPrompt: string
  customScriptPrompt: string
  useAutoCherryPick: boolean
  useMockData: boolean
}