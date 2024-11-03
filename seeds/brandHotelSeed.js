const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define brand hotel detail schema
const brandHotelDetailSchema = new mongoose.Schema({
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
    }
});

// Define brand hotel schema
const brandHotelSchema = new mongoose.Schema({
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
    result: [brandHotelDetailSchema]
});

// Create model based on the schema
const BrandHotel = mongoose.model('BrandHotel', brandHotelSchema);

// Data to be inserted
const brandHotelData = {
    name: "Brand Hotel Service in Barisal",
    type: "Travel and Tourism",
    slug: "brandhotel",
    image: "", // Add URL for image if available
    description: "List of Brand Hotel Service of Barisal",
    result: [
        {
            type: 'Brand Hotel',
            name: 'Hotel Grand Park Barishal',
            image: '',
            address: 'Natun Bazar, Barishal, Bangladesh',
            phone: '+880 1729-790134'
        },
        {
            type: 'Brand Hotel',
            name: 'Hotel Athena International',
            image: '',
            address: 'Station Road, Barishal, Bangladesh',
            phone: '+880 1761-665592'
        },
        {
            type: 'Brand Hotel',
            name: 'Hotel Arena',
            image: '',
            address: 'Sadar Road, Barishal, Bangladesh',
            phone: '+880 1714-666944'
        }
    ]
};

// Inserting data into MongoDB
BrandHotel.create(brandHotelData)
    .then(() => {
        console.log('Brand hotel data inserted');
        mongoose.connection.close(); // Close connection after insertion
    })
    .catch(err => console.error(err));
