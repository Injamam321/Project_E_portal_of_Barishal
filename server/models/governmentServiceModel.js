const mongoose = require('mongoose')


const governmentServiceDetailSchema = new mongoose.Schema(
    {
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
        services: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        }
    }
)

const governmentServiceSchema = new mongoose.Schema({
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
    result: [governmentServiceDetailSchema]
});


const modelName = 'GovernmentService'

module.exports = mongoose.model(modelName, governmentServiceSchema)