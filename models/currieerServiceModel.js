const mongoose = require('mongoose')


const currieerServiceDetailSchema = new mongoose.Schema(
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
        branch: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        }
    }
)

const currieerServiceSchema = new mongoose.Schema({
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
    result: [currieerServiceDetailSchema]
});


const modelName = 'CurrieerService'

module.exports = mongoose.model(modelName, currieerServiceSchema)