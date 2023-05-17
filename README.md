# WELCOME TO WEHYUHHDEH API


### `npm i`

Installs all necessary node modules

### `.env`

Create .env file and copy code from .env.sample

```
export const BASE_URL = "http://localhost:8080";
```

### `Run migrations`

to populate database with initial profile data run:
```
migrate:latest 
```
### `(optional) Run seeds`
to poulate tables with profiles run"
```
knex run:seed
``````
### `Start server`
node --watch index.js