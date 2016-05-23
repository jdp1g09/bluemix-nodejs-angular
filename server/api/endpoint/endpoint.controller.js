var cloudant = require('../../cloudant.js');
db = cloudant.db.use('');

/* Respond to any get on page 1 with a sample1 JSON. HTTP code 200 */
exports.get = function(req, res) {
    db.view('design', 'view', function(err, body) {
        if (!err) {
            res.status(200).json(body);
        } else {
			res.status(err.statusCode).json({
                error: err
            })
		}
    });
};
