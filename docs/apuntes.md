### Paquetes

> npm install copyfiles --save-dev

> npm i --save @nestjs/platform-fastify
> npm i --save @nestjs/config
> npm i --save @fastify/helmet
> npm i --save @fastify/compress
> npm i --save @fastify/csrf-protection
> npm i --save dotenv
> npm install --save @nestjs/passport passport @nestjs/jwt passport-jwt
> npm install --save-dev @types/passport-jwt
> npm install --save @nestjs/mapped-types
> npm i --save class-validator class-transformer
> npm i --save @nestjs/swagger swagger-ui-express

### Comandos nest

> nest new project-name
> nest g module module-name
> nest g controller controller-name

### Crear un recurso con su servicio , controllador y modulo

> nest g resource resource-name

### Ejecutar sonar-scanner

> sonar-scanner -D project.settings=./sonar-scanner.properties

### Nginx config con cookie

```nginx
   location / {
        proxy_pass http://localhost:3000;  # Proxy hacia el backend (NestJS)
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cookie_path / "/; HttpOnly; Secure";  # Asegúrate de que las cookies se pasen correctamente
    }
```
