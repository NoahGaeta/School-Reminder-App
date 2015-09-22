/**
 * Created by Noah Gaeta on 8/16/2015.
 */

var express = require('express');
var app = express();

var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var port     = process.env.PORT || 3000;
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database
var contacts = require("./app/models/contact");
var client = require('twilio')('AC173eaf26eaa04797cab6c7541b94bfe3','ed3231cb545f8f2909b8db255dc8120d');

// configuration =================

app.use('/', express.static(__dirname + '/'));
// set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(cookieParser());// read cookies (needed for auth)
app.use(bodyParser(express.bodyParser()));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./config/passport')(passport); // pass passport for configuration
require('./config/phonenumber');
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port 3000");
/**
 * Created by Noah Gaeta on 9/13/2015.
 */

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/app', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/app', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    // GET method route


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
        // process the signup form

    }
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/phonenumber',isLoggedIn, function(req,res){
        res.render('phonenumber.ejs', {
            user : req.user
        });

        app.post('/phonenumber', function(req,res){
            client.sendMessage({
                        to: ''+req.param('phonenumber'),
                        from: '+17656370080',
                        body: 'Hello world from Noah'
                    },
                    function(err,data) {
                        if (err) {
                            console.log(err);
                            console.log(data);
                        }
                    });
        
            // =====================================
            // LOGOUT ==============================
            // =====================================


// route middleware to make sure a user is logged in



        })});


