import React, { useEffect } from 'react'
import RCTabs from 'rc-tabs'
import { v4 as uuidv4 } from 'uuid'

import { AppTab } from '../../types'
import { useStoredApps } from '../../hooks/useStoredApps'
import { useOpenTabs } from '../../hooks/useOpenTabs'
import { getKeyForApps } from '../../utils/getKeyForApps'

export const getEmptyTab = (app?: Partial<AppTab>) =>
  ({
    id: uuidv4(),
    title: 'WebX Search',
    subtitle: '',
    prompt: '',
    tasks: {},
    text: {},
    html: '',
    script: '',
    data: {},

    isActive: true,
    isFavorite: false,
    type: 'search',
    isNew: true,
    ...app,
} as AppTab)

const Tabs = () => {
  const [storedApps, setStoredApps] = useStoredApps()
  const [openTabs, setOpenTabs] = useOpenTabs([])

  const onAdd = () => {
    setOpenTabs((apps) =>
      apps
        .map((app) => ({ ...app, isActive: false }))
        .concat({
          id: uuidv4(),
          title: 'WebX Search',
          subtitle: '',
          prompt: '',
          tasks: {},
          text: {},
          html: '',
          script: '',
          data: {},

          isActive: true,
          isFavorite: false,
          type: 'search',
          isNew: true,
        })
    )
}

const onRemove = (tabId?: string) => {
    const newTabs = openTabs.filter(({ id }) => id !== tabId)
    const stilHasActiveTab = newTabs.some(({ isActive }) => isActive)
    if (!stilHasActiveTab) {

      setOpenTabs(
        newTabs.map((tab, i, arr) => ({
          ...tab,
          isActive: i === arr.length - 1,
        }))
      )
    } else {
      setOpenTabs(newTabs)
    }
}

const onSelect = (tabId?: string) => {
    setOpenTabs((tabs) =>
      tabs.map((tab) => ({ ...tab, isActive: tab.id === tabId }))
    )
}

  const onEdit = (
    type: 'add' | 'remove',
    info: {
      key?: string
      event:
        | React.MouseEvent<Element, MouseEvent>
        | React.KeyboardEvent<Element>
    }
  ) => {
    if (type === 'remove') {
      onRemove?.(info.key)
    } else if (type === 'add') {
      onAdd?.()
    }
  }

const onChange = (tabId?: string) => {
    onSelect?.(tabId)
}

useEffect(() => {
    document
      .getElementsByClassName('rc-tabs-nav-wrap')[0]
      .setAttribute('data-tauri-drag-region', '')
    document
      .getElementsByClassName('rc-tabs-nav-wrap')[0]
      .setAttribute('data-tauri-drag-region', '')
}, [])

useEffect(() => {
    if (openTabs?.length === 0) {
      setOpenTabs([getEmptyTab()])
    }
}, [getKeyForApps(openTabs)])

const activeKey = openTabs.find((tab) => tab.isActive)?.id || ''

return (
    <div data-tauri-drag-region>
      <RCTabs
        data-tauri-drag-region
        onChange={onChange}
        editable={{ onEdit, showAdd: true }}
        activeKey={activeKey}
        items={openTabs.map((app) => ({
          key: app.id,
          label: app.title,
          children: (
            <iframe
              id={app.id}
              className="absolute w-screen h-[calc(100vh-81px)] border-none shadow-google"
              src={`/${app.type}?id=${app.id}`}
            />
          ),
        }))}
      />
    </div>
  )
}

export default Tabs