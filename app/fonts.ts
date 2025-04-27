// app/fonts.ts
import localFont from 'next/font/local'

export const yourFont = localFont({
  src: [
    {
      path: '../public/fonts/pdark.ttf',
      style: 'normal',
    }, // Add more variations as needed
  ],
  variable: '--font-cyberpunk', // CSS variable name
})


export const secondFont = localFont({
  src: [
    {
        path: '../public/fonts/UnboundPro-Bold.otf',
        style: 'normal',
    },
  ],
  variable: '--font-second',
})


export const thirdFont = localFont({
  src: [
    {
      path: '../public/fonts/Orbitron-VariableFont_wght.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-third',
})


