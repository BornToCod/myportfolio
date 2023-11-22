module.exports = {
  purge: ["./public/**/*.html"],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('taos/plugin')
  ],
  autoprefixer: {},
};
