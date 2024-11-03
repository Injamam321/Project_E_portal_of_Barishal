const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');


const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const universityDetailSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    image: { type: String, required: false },
    address: { type: String, required: false },
    founded: { type: Number, required: false },
    campus: { type: String, required: false },
    students: { type: Number, required: false }
});

const universitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    result: [universityDetailSchema]
});

const University = mongoose.model('University', universitySchema);

const universityData = {
    name: "Universities in Barisal",
    type: "Education",
    slug: "university",
    image: "", // Add the URL for the main image if available
    description: "description goes Here",
    result: [
        {
            type: 'Public',
            name: 'University of Barisal',
            image: "", // Add the URL for the image if available
            address: 'Barishal 8254',
            founded: 2011,
            campus: 'Suburban (50 acres)',
            students: 7539
        },
        {
            type: 'Public',
            name: 'Patuakhali Science & Technology University (PSTU)',
            image: "", // Add the URL for the image if available
            address: 'Dumki- Patuakhali Highway, 8602',
            campus: '109.97 acres (44.50 ha) (including Babugonj, 12.97 acres (5.25ha))',
            students: 3000
        },
        {
            type: 'Public',
            name: 'Barishal Engineering College',
            image: "", // Add the URL for the image if available
            address: 'PC39+394, Barishal-Bhola Hwy',
            campus: 'Rural, 3.6 hectares (8.9 acres)',
            students: 120 // Assuming this is the total number of students enrolled
        },
        {
            type: 'Private',
            name: 'Global University Bangladesh',
            image: "", // Add the URL for the image if available
            address: '',
            founded: null,
            campus: '',
            students: null
        },
        {
            type: 'Private',
            name: 'University of Global Village',
            image: "", // Add the URL for the image if available
            address: '',
            founded: null,
            campus: '',
            students: null
        },
        {
            type: 'Private',
            name: 'Trust University, Berishal',
            image: "", // Add the URL for the image if available
            address: '',
            founded: null,
            campus: '',
            students: null
        }
    ]
};

University.create(universityData)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));

