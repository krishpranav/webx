import {
    JSXTemplate,
    Paragraph,
    P,
    T,
    Link,
    Icon,
    Image,
  } from '../ai-design-system'
  
  export const defaultLayout: JSXTemplate = {
    description: 'default layout, with a simple centered content',
    layout: (
      <div className="flex w-full h-screen items-center flex-col">
        <T>html content</T>
      </div>
    ),
  }