const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// app.use(passport.initialize());
// app.use(passport.session());

passport.use(new GoogleStrategy({
                clientID: process.env.clientID,
                clientSecret: process.env.clientSecret,
                callbackURL: "http://localhost:5000/google/callback"
        },
        function (request, accessToken, refreshToken, profile, done) {
                return done(null, profile);
        }
));

passport.serializeUser(function (user, done) {
        done(null, user);
});

passport.deserializeUser(function (user, done) {
        done(null, user);
});

module.exports = passport;