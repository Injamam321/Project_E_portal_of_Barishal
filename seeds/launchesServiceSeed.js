const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const launchesServiceDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    waterway: {
        type: String,
        required: false
    },
    contact: {
        type: String,  // Changed to String to accommodate non-numeric characters
        required: false
    },
    image: {
        type: String,
        required: false
    },
    schedule: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }
});

const launchesServiceSchema = new mongoose.Schema({
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
    result: [launchesServiceDetailSchema]
});

const LaunchesService = mongoose.model('LaunchesService', launchesServiceSchema);

// Data to be inserted
const launchesServiceData = {
    name: "Launches Service in Barisal",
    type: "Travel and Tourism",
    slug: "launchesservice",
    image: "", // Add URL for image if available
    description: "List of Launches Service of Barisal",
    result: [
        {
            name: 'MV Survi-7',
            waterway: 'M 15285',
            contact: '01712-772786',
            schedule: '2100',
            address: 'M/s. Survi navigation Co. parara Road, Barishal.'
        },
        {
            name: 'MV Suravi - 8',
            waterway: 'M 15082',
            contact: '01712-772786',
            schedule: '2100',
            address: 'M/s. Survi navigation Co. parara Road, Barishal.'
        },
        {
            name: 'MV Suravi - 9',
            waterway: 'M 13580',
            contact: '01712-772786',
            schedule: '2100',
            address: 'M/s. Survi navigation Co. parara Road, Barishal.'
        },
        {
            name: 'MV Sundarban - 8',
            waterway: 'M 7002',
            contact: '01711-3588638, 01758-113011, 01718-024067',
            schedule: '2100',
            address: 'M/s. Sundarbans Navigation Co,Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Sundarban - 10',
            waterway: 'M-01-1291',
            contact: '01711-3588638, 01758-113011, 01718-024067',
            schedule: '2100',
            address: 'M/s. Sundarbans Navigation Co. Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Sundarban - 11',
            waterway: 'M 7495',
            contact: '01711-3588638, 01758-113011, 01718-024067',
            schedule: '2110',
            address: 'M/s. Sundarbans Navigation Co. Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Parabat - 8',
            waterway: 'M 6918',
            contact: '01715-384131, 01711-346080, 01552-429746',
            schedule: '2100',
            address: 'M/s Parabat Shipping Lines, Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Parabat - 10',
            waterway: 'M 7203',
            contact: '01715-384131, 01711-346080, 01552-429746',
            schedule: '2100',
            address: 'M/s Parabat Shipping Lines, Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Parabat - 11',
            waterway: 'M 7522',
            contact: '01715-384131, 01711-346080, 01552-429746',
            schedule: '2100',
            address: 'M/s Parabat Shipping Lines, Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Parabat - 12',
            waterway: 'M 01-1297',
            contact: '01715-384131, 01711-346080, 01552-429746',
            schedule: '2100',
            address: 'M/s Parabat Shipping Lines, Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Kamal -1',
            waterway: 'M 7244',
            contact: '01712-382414',
            schedule: '2100',
            address: 'M/s Haji Kamal shipping laines sadar Road, Barishal.'
        },
        {
            name: 'MV Kirtankhola - II',
            waterway: 'M 7930',
            contact: '01711-336871, 01717-860333',
            schedule: '2100',
            address: 'M?s Salma shipping lines, Sadar Road, Barishal.'
        },
        {
            name: 'MV Kirtankhola 10',
            waterway: 'M-01-1580',
            contact: '01711-336871, 01717-860333',
            schedule: '2100',
            address: 'M?s Salma shipping lines, Sadar Road, Barishal.'
        },
        {
            name: 'MV Tipu - 7',
            waterway: 'M 4266',
            contact: '01777-683998, 01716-248222',
            schedule: '2100',
            address: 'M/s Agarapur navigation Co. Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'MV Farhan -8',
            waterway: 'M-01-1128',
            contact: '01777-683998, 01716-248222',
            schedule: '2100',
            address: 'M/s Agarapur navigation Co. Fazlul Haque Avenue, Barishal.'
        },
        {
            name: 'Adventure - 9',
            waterway: 'M-011-679',
            contact: '01721-944669, 01714-233900, 01911-667318',
            schedule: '2100',
            address: 'M/s Nizam Shipping Lines, pyarara Road, Barishal.'
        },
        {
            name: 'Adventure - 1',
            waterway: 'M-011-431',
            contact: '01721-944669, 01714-233900, 01911-667318',
            schedule: '2100',
            address: 'M/s Nizam Shipping Lines, pyarara Road, Barishal.'
        },
        {
            name: 'MV Kalam Khan-1',
            waterway: 'M- 7514',
            contact: '01720-676913',
            schedule: '2100',
            address: 'M/s Faruk Shipping Lines, Sadar Road, Barishal.'
        },
        {
            name: 'MV Green Line-2',
            waterway: 'M- 13629',
            contact: '01970-060033, 01730-060033',
            schedule: '1430',
            address: 'M/s Green Line water ways, Sadar Road, Barishal.'
        },
        {
            name: 'MV Green Line- 3',
            waterway: 'M -13630',
            contact: '01970-060033, 01730-060033',
            schedule: '0800',
            address: 'M/s Green Line water ways, Sadar Road, Barishal.'
        },
        {
            name: 'MV Manami',
            waterway: '',
            contact: '01309-033586',
            schedule: '2100',
            address: '239/40 City Market, Udayan school on the first floor, Barishal.'
        },
        {
            name: 'MV Kuyakata-2',
            waterway: 'M- 7514',
            contact: '01711-325917',
            schedule: '2100',
            address: 'M/s Dollar enterprise, kakolir mor, Sadar road, Barishal.'
        }
    ]
};

LaunchesService.create(launchesServiceData)
    .then(() => console.log('Launches service data inserted'))
    .catch(err => console.log(err));
