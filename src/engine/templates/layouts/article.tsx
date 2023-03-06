import { JSXTemplate, T } from '../ai-design-system'

export const articleLayout: JSXTemplate = {
  description: 'layout for an article or scientific paper, or encyclopedia',
  layout: (
    <div className="flex w-full h-screen items-center flex-col">
      <T>html content</T>
    </div>
  ),
}