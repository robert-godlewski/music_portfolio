const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Need a title for the project."],
        minlength: [1, "Project title needs to be at least one letter."]
    },
    project_type: {
        type: String,
        required: [true, "Need a project type"],
        enum: [
            "Single",
            "EP",
            "Album",
            "Music Video",
        ]
    },
    // Will need more variables here
}, {timestamps: true});

const Project = mongoose.model('projects', ProjectSchema);

module.exports = Project;
