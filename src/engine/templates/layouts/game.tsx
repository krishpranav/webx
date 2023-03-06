import {
    JSXTemplate,
    Paragraph,
    P,
    T,
    Link,
    Icon,
    Image,
  } from '../ai-design-system'
  
  export const gameLayout: JSXTemplate = {
    description:
      'a minimalist page for a HTML canvas game, WebGL game or a simulator',
    layout: (
      <div className="flex w-full h-screen items-center flex-col">
        <T>html content</T>
      </div>
    ),
  }