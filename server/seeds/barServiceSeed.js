const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define bar service detail schema
const barServiceDetailSchema = new mongoose.Schema({
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
    description: {
        type: String,
        required: false
    }
});

// Define bar service schema
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

// Create model based on the schema
const BarService = mongoose.model('BarService', barServiceSchema);

// Data to be inserted
const barServiceData = {
    name: "BAR Service in Barisal",
    type: "Travel and Tourism",
    image: "", // Add URL for image if available
    slug: "barservice",
    description: "List of BAR Service of Barisal",
    result: [
        {
            type: 'Bar Service',
            name: 'Hotel Grand Park Barishal Lounge',
            image: '',
            address: 'Hotel Grand Park Barishal, Natun Bazar, Barishal, Bangladesh',
            phone: '',
            description: 'Located within Hotel Grand Park Barishal, offering a bar/lounge area.'
        },
        {
            type: 'Bar Service',
            name: 'Hotel Athena International Bar',
            image: '',
            address: 'Station Road, Barishal, Bangladesh',
            phone: '+880 1761-665592',
            description: 'Located within Hotel Athena International, serving alcoholic beverages.'
        },
        {
            type: 'Bar Service',
            name: 'Hotel Arena Bar',
            image: '',
            address: 'Sadar Road, Barishal, Bangladesh',
            phone: '+880 1714-666944',
            description: 'Located within Hotel Arena, providing a bar setting for drinks.'
        }
    ]
};

// Inserting data into MongoDB
BarService.create(barServiceData)
    .then(() => {
        console.log('Bar service data inserted');
        mongoose.connection.close(); // Close connection after insertion
    })
    .catch(err => console.error(err));
