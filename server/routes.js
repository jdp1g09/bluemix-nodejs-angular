var path = require('path');
var errors = require('./components/errors');


module.exports = function(app) {

    // Insert routes below
    app.use('/api/endpoint', require('./api/endpoint'));
};
