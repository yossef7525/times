const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"868568893232-qa41m4tthpdtovt3qefbpitritgtn4jr.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));