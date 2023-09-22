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
        username: 'testuser',
        password: 'testpass'
    }
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;