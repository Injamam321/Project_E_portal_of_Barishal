const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const hospitalDetailSchema = new mongoose.Schema(
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
        phone: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        founded: {
            type: Number,
            required: false
        }
    }
)

const hospitalSchema = new mongoose.Schema({
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
    result: [hospitalDetailSchema]
});


const Hospital = mongoose.model('Hospital', hospitalSchema);

const hospitalData = {
    name: "Hospitals in Barisal",
    type: "Health",
    slug: "hospital",
    image: "", // Add URL for image if available
    description: "Description goes here",
    result: [
        {
            name: 'Sher-e-Bangla Medical College Hospital',
            address: 'Sher-e-Bangla Medical College Hospital Band Road, Barisal',
            phone: '+880 431-2173486',
            image: "", // Add URL for image if available
        },
        {
            name: 'Barishal General Hospital',
            address: 'Barishal General Hospital Road, Barisal',
            phone: '+880 431-2174165',
            image: "", // Add URL for image if available
        },
        {
            name: 'KMC Hospital',
            address: 'Bazar Road, Barishal',
            phone: '01877-763825',
            image: "", // Add URL for image if available
        },
        {
            name: 'Ambia Memorial Hospital',
            address: 'East Bogura Road, Barisal',
            phone: '0431-64112, 0431',
            image: "", // Add URL for image if available
        },
        {
            name: 'Barishal Heart Foundation Hospital',
            address: 'Hazrat Kalushah Rd, Barisal',
            phone: '', // Add phone number if available 
            image: "", // Add URL for image if available
        },
        {
            name: 'Barishal Kidney Foundation Hospital',
            address: 'P946+VF2, Bogra Rd, Barishal',
            phone: '01863-560660',
            image: "", // Add URL for image if available
        },
        {
            name: 'South Apollo Medical College & Hospital',
            address: 'M8FH+X2H, Barisal',
            phone: '01885-941937',
            image: "", // Add URL for image if available
        },
        {
            name: 'Barishal City Hospital',
            address: 'Barishal City Hospital Hospital Road, Barisal',
            phone: '', // Add phone number if available
            image: "", // Add URL for image if available
        },
        {
            name: 'Rahat Anwar Hospital',
            address: 'Band Rd, Barisal 8200',
            phone: '01711-993953',
            image: "", // Add URL for image if available
        },
        {
            name: 'Islami Bank Hospital',
            address: 'M9Q9+MQM, Barishal 8200',
            phone: '01718-237662',
            image: "", // Add URL for image if available
        },
        {
            name: 'Arif Memorial Hospital',
            address: 'P955+7P2, College Rd, Barishal',
            phone: '01733-351611',
            image: "", // Add URL for image if available
        },
        {
            name: 'Grameen GC Eye Hospital, Barishal',
            address: 'M8FQ+6XR, Near RAB Office, Barisal - Pirojpur Highway, Rupatoli, Barishal 8200',
            phone: '0431-71740',
            image: "", // Add URL for image if available
        },
        {
            name: 'Popular Diagnostic Center Ltd, Barishal Branch',
            address: 'M9R5+9XW, 119 Shahid Nazrul Islam Road, Bangla Bazar Rd, Barishal',
            phone: '09613-787819',
            image: "", // Add URL for image if available
        },
        {
            name: 'Momota Specialisted Hospital',
            address: 'Kali Bari Rd, Barishal',
            phone: '01758-286878',
            image: "", // Add URL for image if available
        },
        {
            name: 'Medinova Medical Services',
            address: 'K.B. Hemayet Uddin Rd, Barishal',
            phone: '01711-240969',
            image: "", // Add URL for image if available
        },
        {
            name: 'Bengal Hospital',
            address: 'P94C+H56, Anami Ln, Barishal',
            phone: '01730-513831',
            image: "", // Add URL for image if available
        },
        {
            name: 'LABAID Diagnostic Barishal',
            address: 'K Jahan Center, House-106 Sadar Rd, Barishal 8200',
            phone: '01766-663305',
            image: "", // Add URL for image if available
        },
        {
            name: 'Eden Nursing Home',
            address: 'P938+84G, Barishal',
            phone: '01711-358544',
            image: "", // Add URL for image if available
        },
        {
            name: 'Red Crescent Hospital',
            address: 'P96G+QFJ, Amanatganj Rd, Barishal',
            phone: '01878-003302',
            image: "", // Add URL for image if available
        },
        {
            name: 'Dr. Mokhlesur Rahman (Pvt) Hospital & Diagnostic Center',
            address: 'P93C+C4C, Barishal',
            phone: '',
            image: "",// Add phone number if available
        },
        {
            name: 'Fair Health Clinic',
            address: 'P958+6WV, Kali Bari Rd, Barishal',
            phone: '01763-849589',
            image: "", // Add URL for image if available
        },
        {
            name: 'Razzak Memorial Clinic',
            address: 'P83W+7J5, Barisal',
            phone: '', // Add phone number if available,
            image: "", // Add URL for image if available
        },
        {
            name: 'Bengal Hospital & Diagnostic Center',
            address: 'Barishal',
            phone: '01730-513831',
            image: "", // Add URL for image if available
        },
        {
            name: 'Royal City Hospital',
            address: 'P929+2G4, Brown Compound Rd, Barisal 8200',
            phone: '01708-436520',
            image: "", // Add URL for image if available
        }
    ]
};

Hospital.insertMany(hospitalData)
    .then(() => {
        console.log('Hospital Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
