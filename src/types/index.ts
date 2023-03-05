export type AppType = 'search' | 'content' | 'favourites' | 'settings'

export interface App {
    id: string 

    subtitle: string 

    prompt: string 

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
    openAIKey: string
    openAIModel: string
    customTasksPrompt: string
    useMockData: boolean
}