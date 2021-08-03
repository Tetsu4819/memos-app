module.exports = {
  purge: {
    content: ['./src/**/*.{ts,tsx}'],
    options: {
      whitelist: ['text-md', 'text-lg', 'text-xl', 'text-2xl']
    }
  },
  mode: 'jit',
  darkMode: 'media', // 'media' or 'class'
  theme: { extend: { colors: { 'accent-1': '#333' } } },
  variants: { extend: {} },
  plugins: []
}
