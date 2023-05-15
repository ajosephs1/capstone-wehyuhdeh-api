// const api_key = AIzaSyDtF6_spNsgvJGhTviepX9IkbZRYECwl9o

const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 8080;

console.log(PORT)

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
});