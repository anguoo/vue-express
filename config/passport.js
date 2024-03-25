const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const db = require('./mongodb')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = db.secretOrKey

module.exports = passport => {
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        try {
            // 使用 await 关键字等待异步操作完成
            const user = await User.findById(jwt_payload.id);
            if (user) {
                console.log('Found user:', user);
                return done(null, user); // 用户找到，传递给 done 回调
            } else {
                console.log('No user found with this ID.');
                return done(null, false); // 用户未找到
            }
        } catch (err) {
            console.log('Error fetching user:', err);
            return done(err, false); // 查询过程中发生错误
        }
    }));
}