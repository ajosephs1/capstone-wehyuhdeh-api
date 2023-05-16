// const axios = require('axios')
const express = require("express");
const router = express.Router();
const axios = require('axios')

const BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const API_KEY = "AIzaSyDtF6_spNsgvJGhTviepX9IkbZRYECwl9o"

router.get('/', (req, res) => {
    const config = `${BASE_URL}${req.query.location}&radius=8500&type=restaurant&keyword=jamaican&key=${API_KEY}`
    axios.get(config)
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch(error => res.json(error))
})


module.exports = router;
