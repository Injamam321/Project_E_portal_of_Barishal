const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const ambulanceServiceDetailSchema = new mongoose.Schema(
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

const ambulanceServiceSchema = new mongoose.Schema({
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
    result: [ambulanceServiceDetailSchema]
});

const AmbulanceService = mongoose.model('AmbulanceService', ambulanceServiceSchema);

const ambulanceData = {
    name: "Ambulance Services in Barisal",
    type: "Health",
    image: "", // Add URL for image if available
    slug: "ambulanceservice",
    description: "List of ambulance services in Barisal",
    result: [
        {
            name: "Sher-e-Bangla Medical College Hospital Ambulance Service",
            address: "Sher-e-Bangla Medical College Hospital, Band Road, Barishal",
            phone: "+88 01714-120634",
            type: "Ambulance Service"
        },
        {
            name: "Barishal Red Crescent Society Ambulance Service",
            address: "Red Crescent Office, Sadar Road, Barishal",
            phone: "+88 0431-2171057",
            type: "Ambulance Service"
        },
        {
            name: "Barishal City Corporation Ambulance Service",
            address: "City Corporation Office, Sadar Road, Barishal",
            phone: "+88 0431-2171678",
            type: "Ambulance Service"
        },
        {
            name: "Ambulance Service, Barishal General Hospital",
            address: "Barishal General Hospital, Sadar Road, Barishal",
            phone: "+88 0431-2175044",
            type: "Ambulance Service"
        },
        {
            name: "Islamic Hospital Ambulance Service",
            address: "Islamic Hospital, Kawnia, Barishal",
            phone: "+88 01711-654321",
            type: "Ambulance Service"
        },
        {
            name: "Barishal Heart Foundation Ambulance Service",
            address: "Heart Foundation Hospital, Bhatikhana Road, Barishal",
            phone: "+88 01713-567890",
            type: "Ambulance Service"
        },
        {
            name: "Barishal Nursing Institute and Hospital Ambulance Service",
            address: "Barishal Nursing Institute and Hospital, Rupatali, Barishal",
            phone: "+88 01715-678901",
            type: "Ambulance Service"
        },
        {
            name: "Al-Amin Ambulance Service",
            address: "Fakir Bari Road, Sagordi, Barishal",
            phone: "+88 01712-345678",
            type: "Ambulance Service"
        }
    ]
};

AmbulanceService.insertMany(ambulanceData)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
