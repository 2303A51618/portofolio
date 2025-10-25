let tailwindPlugin;
try {
  // Prefer the new PostCSS-tailwind plugin if installed
  tailwindPlugin = require('@tailwindcss/postcss');
} catch (e) {
  // Fallback to the classic tailwindcss package
  tailwindPlugin = require('tailwindcss');
}

module.exports = {
  plugins: [
    tailwindPlugin,
    require('autoprefixer'),
  ],
};
