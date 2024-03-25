const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
// const User = mongoose.model('user')
const db = require('./mongodb')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = db.secretOrKey

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    }));
}