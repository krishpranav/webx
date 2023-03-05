export interface ModulePath {
    minimal: string
    basic: string
    prompt: string
    prod: string
}
  
export interface CommonConfig {
    cssFramework: string
    design: string[]
    logic: string[]
    images: string[]
    direction: string[]
    params: string[]
    returns: string
    modules: string[]
}
  
export type Tasks = Record<string, string>
export type TaskCategory =
    | 'layout'
    | 'content'
    | 'image'
    | 'script'
    | 'audio'
    | 'style'
    | 'summary'
export type Instructions = Record<TaskCategory, string[]>
  
export interface PromptSettings {
    temperature: number
    n: number
    bestOf: number
  
    gptLogitBias: Record<string, number>
    codexLogitBias: Record<string, number>
  
    frequencyPenalty: number
    presencePenalty: number
    stop?: string[]
}
  
export interface SearchResult {
    title: string
    subtitle: string
    description: string
}