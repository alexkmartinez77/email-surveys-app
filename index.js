const express = require('express');
const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

//passport handled authentication in general
//passing in the googleStategy tells it to authenticate using the google Oath
//passport.use(new GoogleStrategy());

