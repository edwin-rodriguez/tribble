var request = require('request'),
	config = require('../config');

var auth = {
	authorize: function (req, res, next) {
		var header = req.headers['authorization'];
		if (header) {
			var token = header.split(' ')[1];

			request.get(config.AUTH_SERVICE_URL+'authenticate', {
				'auth': {
					'bearer': token
				}
			}, function (error, response, body){
				if (!error && response.statusCode == 200) {
					req.user = JSON.parse(body);
					next();
				} else {
					res.status(401).send('No authorized.');
				}
			});
		} else {
			res.status(401).send('No authorized.');
		}
	}
};

module.exports = auth;
