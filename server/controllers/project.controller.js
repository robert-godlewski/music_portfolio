const Project = require('../models/project.model');

module.exports = {
    createProject: (req, res) => {
        Project.create(req.body)
        .then((newProject) => {
            console.log("Adding in a new project:");
            console.log(newProject);
            res.json(newProject);
        })
        .catch((err) => {
            console.log("Something went wrong in CreateProject on server end.");
            res.status(400).json(err);
        });
    },

    getAllProjects: (req, res) => {
        Project.find({})
        .then((allProjects) => {
            console.log("Finding all of the projects in the database:");
            console.log(allProjects);
            res.json(allProjects);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in getAllProjects on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    getOneProject: (req, res) => {
        Project.findOne({_id: req.params.id})
        .then((project) => {
            console.log("Found a project in database:");
            console.log(project);
            res.json(project);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in getOneProject on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    updateProject: (req, res) => {
        Project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((updateProj) => {
            console.log("Updating a Project in the database:");
            console.log(updateProj);
            res.json(updateProj);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the updateProject on server end.";
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    },

    deleteProject: (req, res) => {
        Project.deleteOne({_id: req.params.id})
        .then((deleteConfirm) => {
            console.log("Removing a project from the database:");
            console.log(deleteConfirm);
            res.json(deleteConfirm);
        })
        .catch((err) => {
            let errorMessage = "Something went wrong in the deleteProject on server end."
            console.log(errorMessage);
            res.json({
                message: errorMessage,
                error: err
            });
        });
    }
};
