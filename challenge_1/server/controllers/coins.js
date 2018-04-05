const dbHelpers = require('../../db/models/helpers.js')

module.exports = {
	coins: {
		get: function (req,res) {
			dbHelpers.findAll(function(err,results){
				if (err) {
				  console.log(err)	
				} else {
					res.send(results)	
				}
			})
		}
	}
}