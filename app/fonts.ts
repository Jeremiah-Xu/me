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


export const unboundFont = localFont({
  src: [
    {
        path: '../public/fonts/UnboundPro-Bold.otf',
        weight: '800',
        style: 'normal',
    },
  ],
  variable: '--font-unbound',
})


export const designerFont = localFont({
  src: [
    {
      path: '../public/fonts/Designer.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-designer',
})


