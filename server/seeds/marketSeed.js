const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const marketDetailSchema = new mongoose.Schema(
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
        }
    }
)

const marketSchema = new mongoose.Schema({
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
    result: [marketDetailSchema]
});

const Market = mongoose.model('Market', marketSchema);

const marketData = {
    name: "Markets and Shopping Malls in Barisal",
    type: "Entertainment",
    slug: "market",
    image: "", // Add the URL for the main image if available
    description: "List of markets and shopping malls in Barisal",
    result: [
        {
            name: "Jonaki Shopping Complex",
            address: "Chowk Bazar Rd, Barisal 8200",
            image: "", // Add image URL if available
            phone: "01911-208375",
            type: "Shopping Mall"
        },
        {
            name: "Fatema Center",
            address: "Sadar Rd, Barishal 8200",
            image: "", // Add image URL if available
            phone: "0431-62298",
            type: "Shopping Mall"
        },
        {
            name: "Mohsin Market",
            address: "Mohsin Market, Barisal 8200",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "City Plaza Market",
            address: "Fazlul Haque Ave Rd, Barishal 8200",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "Barishal market",
            address: "C and B Rd, Barisal 8200",
            image: "", // Add image URL if available
            phone: "01711-358963",
            type: "Market"
        },
        {
            name: "St.Peter Market",
            address: "Barishal",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "Perk mart BD",
            address: "Bogra RdBarishal 8200, Barisal",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "Easy Fashion Ltd.",
            address: "Barishal",
            image: "", // Add image URL if available
            phone: "01759-882538",
            type: "Market"
        },
        {
            name: "Dr. Sobhan Complex",
            address: "Barisal",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "Top Ten Mart Ltd.",
            address: "Agorpur Rd, Barisal 8200",
            image: "", // Add image URL if available
            phone: "01951-144351",
            type: "Market"
        },
        {
            name: "Patarhat",
            address: "Barisal",
            image: "", // Add image URL if available
            phone: "01986-685594",
            type: "Market"
        },
        {
            name: "Chowdhury Market",
            address: "Barisal",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "Hazi Market",
            address: "No K.B. Hemayet Uddin Rd, Barishal 8200",
            image: "", // Add image URL if available
            phone: "01716-503262",
            type: "Market"
        },
        {
            name: "Adv. SHAHEEN COMPLEX",
            address: "130-c Fazlul Haque Ave, Barisal 8200",
            image: "", // Add image URL if available
            phone: "01777-845849",
            type: "Market"
        },
        {
            name: "Katpotty Road",
            address: "Katpotty Road, Barisal, Bangladesh",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "Barisal Online Shop",
            address: "Barisal",
            image: "", // Add image URL if available
            phone: "01616-669944",
            type: "Market"
        },
        {
            name: "BDesh Online Shopping",
            address: "Barisal",
            image: "", // Add image URL if available
            phone: "01616-669944",
            type: "Market"
        },
        {
            name: "Rakib Best Fashion House in Barisal",
            address: "Mohsin Market, Barisal 8200",
            image: "", // Add image URL if available
            phone: "01677-654543",
            type: "Market"
        },
        {
            name: "Ogrozatra Market",
            address: "",
            image: "", // Add image URL if available
            phone: "",
            type: "Market"
        },
        {
            name: "SAILOR",
            address: "Khandokar Mansion, Bangla Bazar Rd, Barisal 8200",
            image: "", // Add image URL if available
            phone: "01321-135020",
            type: "Market"
        },
        {
            name: "1 to 99 market",
            address: "122 Bangla Bazar Rd, Barishal 8200",
            image: "", // Add image URL if available
            phone: "01302-433061",
            type: "Market"
        }
    ]
};

// Inserting data into MongoDB
Market.create(marketData)
    .then(() => {
        console.log('Market data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
