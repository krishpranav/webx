/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
      './src/**/*.{js,jsx,ts,tsx,md,txt}',
    ],
    theme: {
      extend: {
        boxShadow: {
          'noogle': '0 1px 6px 0 #20212451',
        },
        colors: {
          light: {
            bg: '#ffffff',
            highlight: '#1a0dab',
            primary: '#4d5156',
            secondary: '#70757a',
          },
          dark: {
            bg: '#202124',
            highlight: '#8ab4f8',
            primary: '#bdc1c6',
            secondary: '#9aa0a6',
          },
          toolbar: {
            bg: '#DDD6C6',
            fg: '#F7F6F3',
            hover: '#E5E0D5', // '#E8EED9',
            text: '#212124',
            placeholder: '#5A5A5B',
            input: '#D5D4D2',
          },
        },
        fontFamily: {
          google:  ['Google Sans', 'Helvetica', 'Arial', 'sans-serif'],
        },
        spacing: {
          '30px': '30px',
        }
      },
    },
    plugins: [
      require('tailwind-safelist-generator')({
        path: './src/tailwind-classes.txt',
        // https://tailwindcss.com/docs/theme#configuration-reference
        patterns: [
          'items-center',
          'justify-center',
          'focus:outline-none',
          'focus:shadow-outline',
          'text-center',
          'text-right',
          'text-{fontSize}',
          'underline',
          'font-{fontWeight}',
          'font-{fontFamily}',
          'overflow-auto',
          'grid',
          'grid-cols-{gridTemplateColumns}',
          'grid-rows-{gridTemplateRows}',
          'gap-{gap}',
          'flex',
          'flex-row',
          'flex-col',
          'flex-wrap',
          'flex-{flex}',
          'basis-{flexBasis}',
          'leading-{lineHeight}',
          'shadow-{boxShadow}',
          'list-{listStyleType}',
          'list-inside',
          'm-{margin}',
          'md:m-{padding}',
          'mt-{margin}',
          'mb-{margin}',
          'mx-{margin}',
          'my-{margin}',
          'ml-{margin}',
          'mr-{margin}',
  
          'p-{padding}',
          'md:p-{padding}',
          'pt-{padding}',
          'pb-{padding}',
          'px-{padding}',
          'py-{padding}',
          'pl-{padding}',
          'pr-{padding}',
  
          'h-{height}',
          'md:h-{height}',
          'lg:h-{height}',
          'min-h-{minHeight}',
          'max-h-{maxHeight}',
          'w-{width}',
          'md:w-{width}',
          'lg:w-{width}',
          'min-w-{minWidth}',
          'max-w-{maxWidth}',
  
          /*
          '{flexGrow}',
          '{flexShrink}',
          '{flexFamily}',
          */
          'rounded-{borderRadius}',
          'border',
          'border-{borderWidth}',
          'border-{borderColor}',
          'bg-{backgroundColor}',
          'text-{colors}',
          'hover:bg-{backgroundColor}',
          'hover:text-{colors}',
        ],
      }),
    ],
  }