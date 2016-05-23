// Load the Cloudant library.
var Cloudant = require('cloudant');

// Cloudant Credentials
var me = '1707b5e3-7275-434c-896a-304668c2708d-bluemix'; //nodejs'; // Set this to your own account
var password = 'b7e53919c4fb932775d76a2fb091aafb09ae15178817084c61a60b274ca42a1f'; //process.env.cloudant_password;

// Initialize the library with my account.
var cloudant = Cloudant({
    account: me,
    password: password
});

module.exports = cloudant;//.db.use('database_name');

