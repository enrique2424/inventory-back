### Solucion error : Delete `␍`eslintprettier/prettier

1. Abrir el archivo .eslintrc.js
2. Buscar la propiedad rules
3. Dentro de rules buscar la regla `prettier/prettier`

```
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" }
    ],
  },
```

### Solucion : Delete `·`eslintprettier/prettier

```
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": [
      "error",
      { endOfLine: "off" }
    ],
  },
```
