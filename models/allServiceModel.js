const mongoose = require('mongoose')

const allServiceSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    }
)


const modelName = 'AllService'

module.exports = mongoose.model(modelName, allServiceSchema)