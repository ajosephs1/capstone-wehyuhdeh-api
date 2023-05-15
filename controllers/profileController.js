const knex = require('knex')(require('../knexfile'));
const { v4 } = require('uuid');


exports.addProfile = (req, res) => {

    // validator to check that all fields are filled in
    if (!req.body.first_name || !req.body.last_name || !req.body.username || !req.body.email || !req.body.password ) {
        return res.status(400).send('Please ensure all fields are filled in before registering');
    }

    // // validator to check if quantity value is a number
    // if(isNaN(req.body.quantity)) {
    //     return res.status(400).send('Invalid Quantity value, must be a number');
    // }

    // destructure req.body so we can add in id using uuid
    const { first_name, last_name, username, email, password } = req.body;

    const newProfile = {
        user_id: v4(),
        first_name,
        last_name,
        username,
        email,
        password,
    }

    knex('profile')
        .insert(newProfile)
        .then(() => {
            res.status(201).send(`Profile: ${req.body.username} has been added`);
        })
        .catch((err) => res.status(400).send(`Error creating profile: ${req.body.username} ${err} `));
    
}