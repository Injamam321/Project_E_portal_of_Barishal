const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const companyDetailSchema = new mongoose.Schema(
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


const companySchema = new mongoose.Schema({
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
    result: [companyDetailSchema]
});

const Company = mongoose.model('Company', companySchema);

const companieyData = {
    name: "Companies in Barisal",
    type: "Job",
    image: "", // Add URL for image if available
    slug: "company",
    description: "List of Companies in Barisal",
    result: [
        {
            type: 'Software firm',
            name: 'Eclipse Web Host',
            address: '4th floor, katpatty road, Barisal 8200',
            phone: "1728080016",
            image: ""
        },
        {
            type: 'Software firm',
            name: 'Go WebCode',
            address: 'Gorosthan Rd, Barisal 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'Soft IT Institute',
            address: 'House/Holding: 715, Hafiz Manjil, Jame amin masjid hawladar bari Word: 22, Nobogram Rd, বরিশাল 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'Nextzen Limited - Barisal Agent Point',
            address: 'N-hossain Complex, 415 Police Line Rd, Barisal 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'PP Enterprise',
            address: '93 Anami Ln, Barisal 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'MSWebShop',
            address: 'Near Hatem Ali College, 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'Web City Lab',
            address: 'House No 638 Old, New 1108, Block B Professor Goli, BM College Rd, 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'Yes Technologies',
            address: '1st Floor, Opposite of Soruvi, 15 Parara Rd, Barisal 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'MNTECH DIGITAL',
            address: 'Dargah Bari Rd, Barisal 8200, Bangladesh',
            image: ""
        },
        {
            type: 'Software firm',
            name: 'SAM InfoTech. BD',
            address: 'Barishal, Bangladesh',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Brothers furniture',
            address: 'Police Line Road,Barisal Sadar,Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'M/s. neon electric',
            address: '61, Kathpotti Road,Barisal Sadar, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Social marketing company (smc)',
            address: '366/390, Forster Bari Lane, Nabagram Road,Khondoker Villa, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'M/s. badhon electric',
            address: '58, Kathpotti Road,Barisal Sadar, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Emma motors',
            address: '5,Barisal Sadar, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Hello mobile',
            address: 'Girja Moholla, Barisal Sadar, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Time zone',
            address: 'Barisal Sadar,Hemayat Uddin Road , Girja Moholla, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'M/s jahangir mridha enterprise',
            address: 'Barisal Sadar,B. M. College Road , Natun Bazar, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Walton plaza',
            address: 'Barisal Sadar, Nathullabad,Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Ai-ahmed textile industries ltd.',
            address: 'Barisal Sadar,Rupatali, Barisal',
            image: ""
        },
        {
            type: 'Industrial Services Companies',
            name: 'Paradise cables limited',
            image: ""
        }
    ]
};

Company.insertMany(companieyData)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
