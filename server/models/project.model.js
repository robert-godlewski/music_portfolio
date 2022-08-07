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
            "Radio",
            "Film",
            "Game",
        ]
    },
    release_date: {
        type: String,
        required: [true, "Need a release date for the project."],
        minlength: [8, "Must be 8 characters long."]
        // Find out how to use an actual date object here or
        // Separate it out
    },
    links: [{type: String}],
    upc_code: {type: String},
    //songs: [// Relate to another object called songs], 
    //artists: [// Relate to another object called artists for those who worked on this project.]
}, {timestamps: true});

const Project = mongoose.model('projects', ProjectSchema);

module.exports = Project;
