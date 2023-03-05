import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchInput } from './SearchInput'

export default {
  title: 'inputs/SearchInput',
  component: SearchInput,
  argTypes: {
    placeholder: { control: 'string' },
    value: { control: 'string' },
  },
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  primary: true,
  label: 'Default',
}