const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



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


const CurrieerService = mongoose.model('CurrieerService', currieerServiceSchema);


// Data to be inserted
const courierServicesData = {
    name: "Courier Services in Barisal",
    type: "Others",
    slug: "courierservices",
    image: "", // Add URL for image if available
    description: "List of Courier Services in Barisal",
    result: [
        {
            type: 'Currieer service',
            name: 'AJR Courier Service',
            address: 'Nobagram Road (near Mission) Chowmatha, Barishal',
            branch: '',
            phone: '01733-384869',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'E Courier',
            address: 'P952+3M5, C and B Rd, Barishal',
            branch: '',
            phone: '01910-361701',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'Mettro Express',
            address: '938 C and B Rd, Barishal',
            branch: '',
            phone: '01844-610394',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'Panda Courier Service Barishal Hub',
            address: 'P923+CG2, Barishal',
            branch: '',
            phone: '01912-112770',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'Karatoa Courier Service',
            address: 'C and B Rd, Barishal, Bangladesh',
            branch: '',
            phone: '01313-026540',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'Janani Express Parcel Service',
            address: 'Janani Express Parcel Service, Barishal',
            branch: '',
            phone: '01871-042877',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'Sundarban Courier Service',
            address: 'Barisal Branch',
            branch: 'Not explicitly listed, but you can find the nearest branch on their website.',
            phone: 'Various, for exact details visit their branch list',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'SA Paribahan Courier Service',
            address: 'Barishal Branch, 205 Sadar Road, Barishal',
            branch: '',
            phone: '0431-218111, 01755512773',
            image: ""
        },
        {
            type: 'Currieer service',
            name: 'USB Express Courier Service',
            address: 'Barishal Branch, C&B Road, Bhola-5200',
            branch: '',
            phone: '01701208493',
            image: ""
        }
    ]
};

// Insert data into the database
CurrieerService.insertMany(courierServicesData)
    .then(() => {
        console.log('Courier services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
