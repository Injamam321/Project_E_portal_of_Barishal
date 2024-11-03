const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const bloodbankDetailSchema = new mongoose.Schema(
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

const bloodbankSchema = new mongoose.Schema({
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
    result: [bloodbankDetailSchema]
});


const BloodBankServices = mongoose.model('BloodBank', bloodbankSchema);


const bloodBankData = {
    name: "Blood Bank Services in Barisal",
    type: "Health",
    slug: "bloodbank",
    image: "", // Add URL for image if available
    description: "List of Blood Bank Services in Barisal",
    result: [
        {
            type: 'Blood Bank',
            name: 'Blood Bank at Barisal Sher-E-Bangla Medical College Hospital (SBMCH)',
            address: 'Sher-E-Bangla Medical College, Hospital Road, Barisal',
            phone: '+88 0431-217350',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Sandhani National Blood Transfusion Service Barisal Unit',
            address: 'Sher-E-Bangla Medical College, Barisal',
            phone: '+88 01711-409568',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Quantum Blood Bank Barisal',
            address: 'Mahilara, Barisal',
            phone: '+88 01711-232026',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Badhan Blood Bank',
            address: 'BM College Campus, Barisal',
            phone: '+88 01723-073506',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Red Crescent Blood Bank',
            address: 'Red Crescent Bhaban, Band Road, Barisal',
            phone: '+88 01712-211033',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Quantum Blood Bank',
            address: 'Barisal City, Barisal',
            phone: 'Not available',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Al-Mustafa Diabetic & Diagnostic Centre',
            address: 'Barisal City, Barisal',
            phone: '34966537',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Edhi Blood Bank',
            address: 'Barisal City, Barisal',
            phone: '32413232',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Fatmid Blood Bank',
            address: 'Barisal City, Barisal',
            phone: '32225284, 32258656, 32256036, 32253323',
            image: ''
        },
        {
            type: 'Blood Bank',
            name: 'Hussani Blood Bank',
            address: 'Barisal City, Barisal',
            phone: '021-32238405-8, 021-32237734-3',
            image: ''
        }
    ]
};

BloodBankServices.insertMany(bloodBankData)
    .then(() => {
        console.log('Blood Bank services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
