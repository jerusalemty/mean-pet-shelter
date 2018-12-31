var Pet = require('../models/item');

module.exports = {
	index: (req, res) => {
		console.log('getting items');
		Pet.find({}, (err, items) => {
			if (err) {
				console.log("Error retreving ")
				err = err.errors
			}
			res.json({
				'errors': err,
				'items': items
			});
		})
	},
	show: (req, res) => {
		console.log(req.params.id)
		Pet.findById(req.params.id, (err, item) => {
			if (err) {
				console.log("Error retreving ")
				err = err.errors
			}
			console.log('hiii', item)
			res.json({
				'errors': err,
				'item': item
			});
		})
	},
	create: (req, res) => {
		console.log('Adding Item');
		var item = new Pet();
		item.name = req.body.name;
		item.type = req.body.type;
		item.description = req.body.description;
		item.first_skill = req.body.first_skill;
		item.second_skill = req.body.second_skill;
		item.third_skill = req.body.third_skill;
		item.save((err) => {
			if (err) {
				err = err.errors
				console.log('Error creating Item');
			}
			res.json({
				'errors': err,
				'item': item
			});
		});
	},
	update: (req, res) => {
		console.log('Editing Item', req.body, req.params.id)
		Pet.findOne({
			_id: req.params.id
		}, (err, item) => {
			if (err) {
				console.log("Error finding one ")
				err = err.errors
				res.json({
					'errors': err
				});
			} else {
				console.log(item);
				item.name = req.body.name;
				item.type = req.body.type;
				item.description = req.body.description;
				item.first_skill = req.body.first_skill;
				item.second_skill = req.body.second_skill;
				item.third_skill = req.body.third_skill;
				item.save((err) => {
					if (err) {
						// console.log('error here', err);
						res.json({
							'errors': err.errors
						});
					}
					res.json({
						'item': item,
					});
				});
			}
		})
	},

	destroy: (req, res) => {
		Pet.remove({
			_id: req.params.id
		}, (err) => {
			if (err) {
				err = err.errors
				console.log(err);
			}
			Pet.find({}, (err, item) => {
				res.json({
					data: item,
					error: err
				})
			})
		});
	}
}