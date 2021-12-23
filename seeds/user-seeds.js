const { User } = require('../models');

const userData = [
    {
        username: 'grijarooo',
        email: 'grijaroo@fakemail.com',
        password: 'marcus77aurrelius'
    },
    {
        username: 'dustin2400',
        email: 'dustin2400@hotmail.com',
        password: 'jimihendrix'
    },
    {
        username: 'DJG',
        email: 'djg@fakemial.com',
        password: 'howhighyouare'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;