import { useLocalStorage } from '@mantine/hooks'
import { App } from '../types'

export const useStoredApps = () =>
  useLocalStorage<App[]>({
    key: 'stored-apps-rev-1',
    defaultValue: [],
})