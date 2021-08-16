const ProductController = require("../controllers/product.controller");

module.exports = function(app){
  app.post('/api/project', ProductController.createProject);
  app.get('/api/project/backlog/:p', ProductController.findByProgress);
  app.get('/api/project', ProductController.getAllProjects);
  app.get('/api/project/:id', ProductController.getProject);
  app.put('/api/project/change/:id', ProductController.change);
  app.put('/api/project/change/move/:id', ProductController.move);
  app.delete('/api/project/:id', ProductController.deleteProject);
  

}