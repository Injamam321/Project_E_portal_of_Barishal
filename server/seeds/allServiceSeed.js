const mongoose = require('mongoose');

// Replace with your MongoDB URI
const { MONGO_URI } = require('../constants');
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const allServiceSchema = new mongoose.Schema({
    image: { type: String, required: false },
    name: { type: String, required: false },
    slug: {
        type: String,
        required: true
    },
    description: { type: String, required: false }
})


const Service = mongoose.model('AllService', allServiceSchema)

// Data to be inserted (excluding the `id` field)
const services = [
    {
        image: "https://i.ibb.co/CKcD13z/university.png",
        name: "University",
        slug: "university",
        description: "University"
    },
    {
        image: "https://i.ibb.co/THPFmqd/Collage.png",
        name: "Collage",
        slug: "college",
        description: "Collage"
    },
    {
        image: "https://i.ibb.co/2svF0N9/school.png",
        name: "School",
        slug: "school",
        description: "School"
    },
    {
        image: "https://i.ibb.co/4897693/hospital.png",
        name: "Hospital",
        slug: "hospital",
        description: "Hospital"
    },
    {
        image: "https://i.ibb.co/dr85cRM/market.png",
        name: "Market",
        slug: "market",
        description: "Market"
    },
    {
        image: "https://i.ibb.co/vLN9tzR/ambulance.png",
        name: "Ambulance",
        slug: "ambulanceservice",
        description: "Ambulance"
    },
    {
        image: "https://i.ibb.co/Xx4FPYW/touring-zone.png",
        name: "Touring Zone",
        slug: "touringzone",
        description: "Touring Zone"
    },
    {
        image: "https://i.ibb.co/4fzYyp7/company.png",
        name: "Company",
        slug: "company",
        description: "Company"
    },
    {
        image: "https://i.ibb.co/XzTWqJb/service.png",
        name: "Govt Service",
        slug: "governmentservice",
        description: "Govt Service"
    },
    {
        image: "https://i.ibb.co/ZSDNrNQ/Curieer.png",
        name: "Curieer Service",
        slug: "courierservice",
        description: "Curieer Service"
    },
    {
        image: "https://i.ibb.co/F3kvrS6/blood.png",
        name: "Blood Bank",
        slug: "bloodbank",
        description: "Blood Bank"
    },
    {
        image: "https://i.ibb.co/vYcPHbF/food.png",
        name: "Higlighted Food",
        slug: "highlightedFood",
        description: "Higlighted Food"
    },
    {
        image: "https://i.ibb.co/0FTHxmn/bar.png",
        name: "Bar Service",
        slug: "barservice",
        description: "Bar Service"
    },
    {
        image: "https://i.ibb.co/WDmLdBt/hotel.png",
        name: "Brand Hotel",
        slug: "brandhotel",
        description: "Brand Hotel"
    },
    {
        image: "https://i.ibb.co/H7kdpLD/Pngtree-animated-ship-logo-5582002.png",
        name: "Launches Service ",
        slug: "launchesservice",
        description: "Launches Service "
    },
    {
        image: "https://i.ibb.co/Z8K5gGR/air.png",
        name: "Air Service",
        slug: "airservice",
        description: "Air Service"
    },
    {
        image: "https://i.ibb.co/H7kdpLD/Pngtree-animat",
        name: "Bus service",
        slug: "busservice",
        description: "Bus service",
    }
];

// Insert data into the database
Service.insertMany(services)
    .then(() => {
        console.log('Services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
