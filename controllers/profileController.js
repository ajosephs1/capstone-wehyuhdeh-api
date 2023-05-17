const knex = require('knex')(require('../knexfile'));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4 } = require('uuid');


exports.addProfile = (req, res) => {

    // validator to check that all fields are filled in
    if (!req.body.first_name || !req.body.last_name || !req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).send('Please ensure all fields are filled in before registering');
    }

    const { first_name, last_name, username, email, password } = req.body;

    const newProfile = {
        user_id: v4(),
        first_name,
        last_name,
        username,
        email,
        password: bcrypt.hashSync(password),
    }

    knex('profile')
        .insert(newProfile)
        .then(() => {
            res.status(201).send(`Registered: ${req.body.username} has been added`);
        })
        .catch((err) => res.status(400).send(`Error creating profile: ${req.body.username} ${err} `));

}

exports.loginProfile = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send(`Please`);
    }

    const user = knex('profile').where({ username }).first()

    if (!user) {
        return res.status(400).send("no user with that username");
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    // Validate the password
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
    }

    const token = jwt.sign({ username: user.username, id: user.user_id }, process.env.JWT_KEY);
    res.json({ token });
}