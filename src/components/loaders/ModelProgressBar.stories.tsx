import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ModelProgressBar } from './ModelProgressBar'

export default {
  title: 'loaders/ModelProgressBar',
  component: ModelProgressBar,
  argTypes: {
    elapsedTime: { control: 'number' },
    estimatedTime: { control: 'number' },
    isLoading: { control: 'boolean' },
    model: { control: 'string' },
    provider: { control: 'string' },
  },
} as ComponentMeta<typeof ModelProgressBar>

const Template: ComponentStory<typeof ModelProgressBar> = (args) => (
  <ModelProgressBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  primary: true,
  label: 'Default',
}