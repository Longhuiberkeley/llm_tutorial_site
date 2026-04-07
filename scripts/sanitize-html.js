const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../ai-unpacked/src/content/docs/en');

const replacements = {
  'bg-white': 'bg-surface-container-lowest',
  'text-black': 'text-on-surface',
  'text-white': 'text-on-primary',
  'bg-red-50': 'bg-error-container',
  'border-red-200': 'border-error',
  'text-red-800': 'text-on-error-container',
  'text-red-700': 'text-on-error-container',
  'bg-green-50': 'bg-success-container',
  'border-green-200': 'border-success',
  'text-green-700': 'text-on-success-container',
  'bg-yellow-50': 'bg-tertiary-container',
  'border-yellow-200': 'border-tertiary-container',
  'text-yellow-700': 'text-on-tertiary-container',
  'text-gray-': 'text-outline-', // general fallback if needed, but lets just stick to the specific ones
};

function sanitizeFiles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  
  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    Object.entries(replacements).forEach(([oldStr, newStr]) => {
      // Use regex to replace exact words, avoiding partial matches like text-white-500
      const regex = new RegExp(`\\b${oldStr}\\b`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, newStr);
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Sanitized: ${file}`);
    }
  });
}

sanitizeFiles();
