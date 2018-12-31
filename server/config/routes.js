var items = require('../controllers/items.js');

module.exports = function (app) {

	app.get('/api/pets', items.index);

	app.get('/api/pets/:id', items.show);

	app.post('/api/pets/new', items.create);

	app.put('/api/pets/:id', items.update);

	app.delete('/api/pets/:id', items.destroy);
}