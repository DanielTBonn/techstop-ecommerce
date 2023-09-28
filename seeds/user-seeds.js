const { User } = require ('../models');

const userData = [
    {
        id: 1,
        username: 'DanielTBonn',
        password: 'password1'
    },
    {
        id: 2,
        username: 'lernatio',
        password: 'password2'
    },
    {
        id: 3,
        username: 'torretaylor',
        password: 'password3'
    },
    {
        id: 4,
        username: 'ericV',
        password: 'password'
    },
    {
        id: 5,
        username: 'abdulAl',
        password: 'password'
    },
    {
        id: 6,
        username: 'chrisD',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;