const ProjectController = require('../controllers/project.controller');

module.exports = (app) => {
    app.post('/api/project', ProjectController.createProject);
    app.get('/api/project', ProjectController.getAllProjects);
    app.get('/api/project/:id', ProjectController.getOneProject);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/:id', ProjectController.deleteProject);
}
