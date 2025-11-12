import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: {
    // 响应式字体大小
    'text-responsive-xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    'text-responsive-lg': 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    'text-responsive-md': 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    'text-responsive-sm': 'text-base sm:text-lg md:text-xl',
    // 响应式间距
    'gap-responsive': 'gap-2 sm:gap-4 md:gap-6 lg:gap-8',
    'p-responsive': 'p-2 sm:p-3 md:p-4 lg:p-5',
    'mt-responsive': 'mt-4 sm:mt-6 md:mt-8 lg:mt-12',
  },
})

