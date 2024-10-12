const escape = (file) => file.replace(/([${}()'"])/g, '\\$1');

export default {
  '**/*.{js,jsx,ts,tsx}': (files) => [
    `bun format ${files.map(escape).join(' ')}`,
    `bun lint ${files.map(escape).join(' ')}`
  ]
};