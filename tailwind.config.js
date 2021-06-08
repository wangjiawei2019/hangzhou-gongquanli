/*
 * @Date: 2021-01-16 21:20:47
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-02 17:02:21
 * @FilePath: /hangzhou-gongquanli/tailwind.config.js
 */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  variants: {
    backgroundColor: ['hover', 'focus'],
    borderColor: ['focus', 'hover'],
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {},
      spacing: {
        96: '24rem',
        128: '32rem',
      },
      backgroundImage: {
        'item-1': "url('/src/assets/images/item-1.png')",
        'item-2': "url('/src/assets/images/item-2.png')",
        'item-3': "url('/src/assets/images/item-3.png')",
        'item-4': "url('/src/assets/images/item-4.png')",
        'header-bg': "url('/src/assets/images/header-bg.png')",
        'footer-bg': "url('/src/assets/images/footer-bg.png')",
        'section-bg-left': "url('/src/assets/images/section-bg-left.png')",
        'map-bg': "url('/src/assets/images/map-bg.png')",
        'section-bg-right': "url('/src/assets/images/section-bg-right.png')",
        'detail-bg': "url('/src/assets/images/detail-bg.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        full: '100% 100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
