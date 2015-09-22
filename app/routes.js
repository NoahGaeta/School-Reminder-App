/**
 * Created by Noah Gaeta on 9/13/2015.
*/
var client = require('twilio')('AC173eaf26eaa04797cab6c7541b94bfe3','ed3231cb545f8f2909b8db255dc8120d');
module.exports = function(app, passport, client) {

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

        app.post('/phonenumber', function(req,res) {
            res.render('phonenumber.ejs', {
                user: req.user },
            client.sendMessage({
                    to: '+17654277238',
                    from: '+17656370080',
                    body: 'Hello world from Noah'
                },
                function(err,data) {
                    if (err) {
                        console.log(err);
                        console.log(data);
                    }
                }));
    // =====================================
    // LOGOUT ==============================
    // =====================================


// route middleware to make sure a user is logged in



})})};


