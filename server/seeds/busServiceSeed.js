const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define bus service detail schema
const busServiceDetailSchema = new mongoose.Schema({
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
    phone: {
        type: String,
        required: false
    },
    destinations: {
        type: String,
        required: false
    }
});

// Define bus service schema
const busServiceSchema = new mongoose.Schema({
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
    result: [busServiceDetailSchema]
});

// Create model based on the schema
const BusService = mongoose.model('BusService', busServiceSchema);

// Data to be inserted
const busServiceData = {
    name: "Bus Service in Barisal",
    type: "Travel and Tourism",
    slug: "busservice",
    image: "", // Add URL for image if available
    description: "List of Bus Service of Barisal",
    result: [
        {
            type: 'Bus Service',
            name: 'Green Line Paribahan',
            image: '',
            phone: '+880 2-8331302, +880 2-9000812',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Hanif Enterprise',
            image: '',
            phone: '+880 2-7100305, +880 2-7100303',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Shyamoli Paribahan',
            image: '',
            phone: '+880 2-9003312, +880 2-9003313',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Sakura Paribahan',
            image: '',
            phone: '+880 2-9011471, +880 2-9005811',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Eagle Paribahan',
            image: '',
            phone: '+880 2-9006700, +880 2-9006701',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Shohagh Paribahan',
            image: '',
            phone: '+880 2-9003311, +880 2-9003314',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Desh Travels',
            image: '',
            phone: '+880 2-9003315, +880 2-9003316',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'TR Travels',
            image: '',
            phone: '+880 2-9011925, +880 2-9008466',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Unique Service',
            image: '',
            phone: '+880 2-9011882, +880 2-9005120',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Royal Coach',
            image: '',
            phone: '+880 2-9014531, +880 2-9005205',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Shohagh Deluxe',
            image: '',
            phone: '+880 2-9003310, +880 2-9003317',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'S. Alam Paribahan',
            image: '',
            phone: '+880 2-9002228, +880 2-9002520',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Saintmartin Paribahan',
            image: '',
            phone: '+880 2-9011555, +880 2-9012333',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Dhaka Express',
            image: '',
            phone: '+880 2-9005254, +880 2-9007513',
            destinations: 'Dhaka, Jessore, Cox\'s Bazar, Khulna, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Comfort Line',
            image: '',
            phone: '+880 2-9013848, +880 2-9013849',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Shyamoli NR Travels',
            image: '',
            phone: '+880 2-9008634, +880 2-9008635',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        },
        {
            type: 'Bus Service',
            name: 'Soudia Air Con',
            image: '',
            phone: '+880 2-9007599, +880 2-9006172',
            destinations: 'Dhaka, Chittagong, Cox\'s Bazar, Khulna, Jessore, etc.'
        }
    ]
};

// Inserting data into MongoDB
BusService.create(busServiceData)
    .then(() => {
        console.log('Bus service data inserted');
        mongoose.connection.close(); // Close connection after insertion
    })
    .catch(err => console.error(err));
