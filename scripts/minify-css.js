const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, '..', 'public', 'css');
const files = ['main.css', 'home.css', 'about.css', 'services.css', 'contact.css', 'blogs.css'];

function minify(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

for (const file of files) {
  const srcPath = path.join(cssDir, file);
  const outPath = path.join(cssDir, file.replace('.css', '.min.css'));
  const src = fs.readFileSync(srcPath, 'utf8');
  const min = minify(src);
  fs.writeFileSync(outPath, min);
  console.log(`${file}: ${src.length} -> ${min.length} bytes (${outPath.split(path.sep).pop()})`);
}
