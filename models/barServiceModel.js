const mongoose = require('mongoose')


const barServiceDetailSchema = new mongoose.Schema(
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
        phone: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        }
    }
)

const barServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    result: [barServiceDetailSchema]
});


const modelName = 'BARService'

module.exports = mongoose.model(modelName, barServiceSchema)