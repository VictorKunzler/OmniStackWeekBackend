const DevController = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController');

const DevRoutes = (routes) => {
  routes.get('/devs', DevController.index);
  routes.post('/devs', DevController.store);
  
  routes.get('/search', SearchController.index);
};

module.exports = DevRoutes;
