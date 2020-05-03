const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({
  name: String,
  speed: Number,
  time: { type: Number, index: true },
  color: String
});

userSchema.plugin(mongoosePaginate);
const UserData = mongoose.model('userData', userSchema); 

module.exports = {
  UserData
};