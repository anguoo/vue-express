const mongoose = require('mongoose')
const Schema = mongoose.Schema

const selectDB = mongoose.connection.useDb('cloudmind_sts')
const UserSchema = new Schema({
    passWord: String,
    role: Number,
})
const userModel = selectDB.model('user', UserSchema, 'user')

module.exports = userModel