## Crear modelo de una base de datos ya existente

> npx prisma db pull

## Para subir una migracion

> npx prisma db push

### Instalar prisma

> npm install prisma --save-dev
> npm install @prisma/client

## Iniciar prisma

> npx prisma init

## Crear una migracion

> npx prisma migrate dev --name init

### Subir el seed

> npm run prisma:seed

### Si copia la carpeta prisma de otro proyecto

> npx prisma generate

### Si no se ha creado la carpeta prisma

> npx prisma init
