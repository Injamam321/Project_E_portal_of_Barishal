const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define air service detail schema
const airServiceDetailSchema = new mongoose.Schema({
    type: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    contact: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    }
});

// Define air service schema
const airServiceSchema = new mongoose.Schema({
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
    result: [airServiceDetailSchema]
});

// Create model based on the schema
const AirService = mongoose.model('AirService', airServiceSchema);

// Data to be inserted
const airServiceData = {
    name: "Air Service in Barisal",
    type: "Travel and Tourism",
    image: "", // Add URL for image if available
    slug: 'airservice',
    description: "List of Air Service of Barisal",
    result: [
        {
            type: 'Airline',
            name: 'Biman Bangladesh Airlines',
            contact: 'For booking and inquiries, visit Biman Bangladesh Airlines or contact their customer service.',
            location: 'Barishal Airport (BZL), Barishal, Bangladesh'
        },
        {
            type: 'Airline',
            name: 'US-Bangla Airlines',
            contact: 'For booking and inquiries, visit US-Bangla Airlines or contact their customer service.',
            location: 'Barishal Airport (BZL), Barishal, Bangladesh'
        }
    ]
};

// Inserting data into MongoDB
AirService.create(airServiceData)
    .then(() => {
        console.log('Air service data inserted');
        mongoose.connection.close(); // Close connection after insertion
    })
    .catch(err => console.error(err));
