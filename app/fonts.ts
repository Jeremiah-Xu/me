// app/fonts.ts
import localFont from 'next/font/local'

export const yourFont = localFont({
  src: [
    {
      path: '../public/fonts/pdark.ttf',
      weight: '800',
      style: 'normal',
    },


    // Add more variations as needed
  ],
  variable: '--font-cyberpunk', // CSS variable name
})

export const unboundFont = localFont({
  src: [
    {
        path: '../public/fonts/UnboundPro-Bold.otf',
        weight: '700',
        style: 'normal',
    },
  ],
  variable: '--font-unbound',
})
