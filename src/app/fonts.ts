// app/fonts.ts or lib/fonts.ts
import { Zen_Dots } from 'next/font/google';

export const zenDots = Zen_Dots({
  weight: '400', // Zen Dots only comes in weight 400
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-dots', // Optional: for CSS variable usage
});