module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
   
      // Añade las reglas que quieras ignorar aquí
      'simple-import-sort/imports': 'off',
      'prettier/prettier': 'off',
      'react-hooks/exhaustive-deps': 'off'
    
  },
}
