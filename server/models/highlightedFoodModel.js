const mongoose = require('mongoose')


const highlightedFoodDetailSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        }
    }
)


const highlightedFoodSchema = new mongoose.Schema({
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
    result: [highlightedFoodDetailSchema]
});


const modelName = 'HighlightedFood'

module.exports = mongoose.model(modelName, highlightedFoodSchema)