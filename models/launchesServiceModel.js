const mongoose = require('mongoose')


const launchesServiceDetailSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        waterway: {
            type: String,
            required: false
        },
        contact: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        schedule: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        }
    }
)


const launchesServiceSchema = new mongoose.Schema({
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
    result: [launchesServiceDetailSchema]
});


const modelName = 'LaunchesService'

module.exports = mongoose.model(modelName, launchesServiceSchema)