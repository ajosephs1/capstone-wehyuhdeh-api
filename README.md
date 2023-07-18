# WELCOME TO WEHYUHHDEH API


### `npm i`

Installs all necessary node modules

### `.env`

Create .env file and copy code from .env.sample

```
export const BASE_URL = "http://localhost:8080";
```

### `mySQL`
link to download: https://dev.mysql.com/downloads/installer/
ensure that your mySQL server is live and run CLI command `CREATE DATABASE wehYuhDehData;`

### `Run migrations`

to populate database with initial profile data run:

```
knex migrate:latest 
```
### `(optional) Run seeds`

to poulate tables with profiles run:

```
knex seed:run
```

### Start server
```
node --watch index.js
```

### Tech Stack
- `bycryptjs` to ensure user password privacy
- `jsonwebtoken`: https://jwt.io/
- `express.js` : https://expressjs.com/
- `mysql` to host database 
- `knex`
- `axios`