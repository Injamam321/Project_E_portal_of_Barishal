const mongoose = require('mongoose')


const collegeDetailSchema = new mongoose.Schema({
    type: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    campus: {
        type: String,
        required: false
    },
    founded: {
        type: Number,
        required: false
    },
    students: {
        type: Number,
        required: false
    }

});

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    result: [collegeDetailSchema]
});

const modelName = 'College'

module.exports = mongoose.model(modelName, collegeSchema)