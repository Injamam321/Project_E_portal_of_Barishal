const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const touringZoneDetailSchema = new mongoose.Schema(
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
        }

    }
)

const touringZoneSchema = new mongoose.Schema({
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
    result: [touringZoneDetailSchema]
});

const TouringZone = mongoose.model('TouringZone', touringZoneSchema);

const touringZoneData = {
    name: "TouringZones in Barisal",
    type: "Entertainment",
    slug: "touringzone",
    image: "", // Add URL for image if available
    description: "List of TouringZones in Barisal",
    result: [
        {
            type: 'sea beach',
            name: 'Kuakata Sea Beach',
            image: ""
        },
        {
            type: 'Park',
            name: 'Muktijoddha Park',
            address: 'M9WF+5FV, Band Rd, Barishal 8200',
            image: ""
        },
        {
            type: 'Park',
            name: 'Planet Park',
            address: 'M9VC+754, Band Rd, Barishal 8200',
            image: ""
        },
        {
            type: 'Park',
            name: 'Bangabandhu Uddyan',
            address: 'Band Rd, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Shadhinota Park',
            address: 'Shadhinota Park Trail, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Bibir Pukur',
            address: 'Heron Square, Bibir pukur par, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Green City Park TNI',
            address: 'M9V9+GF7, Bells Park Trail, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: '30 Godown',
            address: 'Barishal 8200',
            image: ""
        },
        {
            type: 'Park',
            name: 'Shahan Ara Begom Park',
            address: 'Chowmatha lake side, Dhaka - Barisal Highway, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Nishorgo Park Barisal',
            phone: '1783613945',
            image: ""
        },
        {
            type: 'Park',
            name: 'Durga Sagar',
            address: 'Durga Sagar, 8213 Swarupkathi - Barisal Rd, Madhabpasha 8213',
            image: ""
        },
        {
            type: 'Park',
            name: 'Shaheed Sukanto Babu Park',
            address: 'P96F+XP6, Khan Bari, Town School Road, Bhatikhana, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Taltoli Bhangar Par',
            address: 'P9RP+WR, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Bales Park Lotus Lake',
            address: 'Bangabandhu Uddyan',
            image: ""
        },
        {
            type: 'Park',
            name: 'Choumatha Park',
            address: 'P923+F67, Barishal',
            image: ""
        },
        {
            type: 'Park',
            name: 'Adams Park',
            address: 'M9QG+MVR',
            image: ""
        },
        {
            type: 'Park',
            name: 'Guthia Baitul Aman Jame Masjid',
            address: 'Swarupkathi - Barisal Rd',
            image: ""
        },
        {
            type: 'Park',
            name: 'Atghar Kuriana Guava Market',
            address: 'P5Q3+XW9, Atghar Kuriana Union',
            image: ""
        }
    ]
};

TouringZone.insertMany(touringZoneData)
    .then(() => {
        console.log('TouringZone Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
