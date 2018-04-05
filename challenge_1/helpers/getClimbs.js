const request = require("request-promise");
const Promise = require('bluebird');
const dbHelpers = require('../db/models/helpers.js')


let options = {
	//specify data from Udemy API
  url: `https://api.coindesk.com/v1/bpi/historical/close.json`,
};

module.exports = {

	getPriceHistory: async function () {
		try {
		await request(options).then((results)=>{
			let prices = JSON.parse(results)
			let data = [];
			for (key in prices.bpi) {
				let entry = {};
				entry['date'] = key;
				entry['price'] = prices.bpi[key]
				data.push(entry)
			}
			console.log(typeof data[0].date)

			data.forEach(function (element){
				dbHelpers.insertOne(element.date,element.price,function (err) {
					if (err) {
						console.log(err)	
					}	else {
						console.log('success')
					}
				})
			})

		});	

		} catch (err) {
			console.error(err);	
		}
	}

}


