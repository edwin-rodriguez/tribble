var request = require('request');

var auth = {
	authorize: function (req, res, next) {
		var header = req.headers['authorization'];
		if (header) {
			var token = header.split(' ')[1];

			request.get('http://localhost:3000/authenticate', {
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