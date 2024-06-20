import { minify } from 'html-minifier-terser';

export default (indexHtml: string) => {
  return minify(indexHtml, {
    caseSensitive: true,
    keepClosingSlash: true,
    minifyCSS: true,
  });
};
