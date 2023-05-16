// const api_key = AIzaSyDtF6_spNsgvJGhTviepX9IkbZRYECwl9o

const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const profileRoute = require('./routes/profile');
const placesRoute = require('./routes/places')


console.log(PORT)

app.use(cors());
app.use(express.json());

app.use('/api/profile', profileRoute);
app.use('/api/places', placesRoute);

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
});