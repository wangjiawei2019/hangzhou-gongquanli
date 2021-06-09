/*
 * @Date: 2021-01-16 21:20:47
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 14:54:01
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
      backgroundImage: {},
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
