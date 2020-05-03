const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://mongoracer:iloveracing12345@localhost:27017/racingGameDB';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));