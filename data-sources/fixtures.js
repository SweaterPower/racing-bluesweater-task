const { UserData } = require('./models');
const mongoose = require('mongoose');
require('./config');

const USER_COUNT = 4000000;
const BULK_COUNT = 200000;

mongoose.connection.once('open', () => {
    UserData.remove({}, generateData);
});

async function generateData()
{
    numUsers = 0
    while (numUsers < USER_COUNT)
    {
        var users = [];
        for (bulkIndex = 0; bulkIndex < BULK_COUNT; bulkIndex++)
        {
            numUsers++;
            var user = { insertOne: { document: {name: "testUser" + numUsers, speed: 69, time: `${numUsers}`, color: "RED"}}};
            users.push(user);
        }
        await UserData.bulkWrite(users).then(res => console.log(`inserted ${res.insertedCount} users`));
    }
    console.log("data generation - complete");
    process.exit(0);
}