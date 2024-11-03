const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define highlighted food detail schema
const highlightedFoodDetailSchema = new mongoose.Schema({
    type: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }
});

// Define highlighted food schema
const highlightedFoodSchema = new mongoose.Schema({
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
    result: [highlightedFoodDetailSchema]
});

// Create model based on the schema
const HighlightedFood = mongoose.model('HighlightedFood', highlightedFoodSchema);

// Data to be inserted
const highlightedFoodData = {
    name: "Highlighted Food of Barisal",
    type: "Travel and Tourism",
    slug: 'highlightedFood',
    image: "", // Add URL for image if available
    description: "List of Highlighted Food of Barisal",
    result: [
        {
            type: 'Highlighted Food',
            name: 'Panta Ilish',
            description: 'Panta Ilish is a traditional dish made with fermented rice and Hilsa fish, often enjoyed with green chili, onion, and mustard paste. This dish is particularly popular during the Bengali New Year (Pohela Boishakh).',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Shutki Bhorta',
            description: 'A spicy mashed preparation made from dried fish (shutki), mixed with mustard oil, green chilies, onions, and garlic. Shutki Bhorta is a local delicacy loved for its strong flavors and aroma.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Bhapa Pitha',
            description: 'A type of steamed rice cake made with rice flour, coconut, and jaggery, often enjoyed during winter. This is a common treat during the winter season and is enjoyed with a variety of fillings.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Chingri Malai Curry',
            description: 'A creamy prawn curry made with coconut milk, spices, and shrimp. This dish is a favorite at both family dinners and festive occasions.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Bhorta (Mashed Delicacies)',
            description: 'Various types of mashed items like Begun Bhorta (eggplant), Aloo Bhorta (potato), and Daal Bhorta (lentils) mixed with mustard oil, chilies, and onions. Bhorta is an essential part of daily meals in Barishal.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Kachchi Biryani',
            description: 'A layered rice dish made with marinated raw meat (usually mutton), basmati rice, potatoes, and a blend of spices. Kachchi Biryani from Barishal is known for its unique taste and is a staple at weddings and large gatherings.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Chitol Maacher Muitha',
            description: 'Fish balls made from Chitol fish, cooked in a spicy gravy. This dish showcases the ingenuity in Barishali cooking, turning the unique texture of Chitol fish into a delightful preparation.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Patla Khichuri',
            description: 'A soupy version of khichuri made with rice, lentils, and vegetables, often served with fried fish or meat. This dish is a comforting meal, especially during rainy days.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Bager Chingri',
            description: 'Large tiger prawns cooked with a rich blend of spices. The large prawns from the Sundarbans region near Barishal are especially prized for their size and flavor.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Mishti (Sweets)',
            description: 'Popular varieties include Rosogolla, Sandesh, and Chomchom. Barishal\'s sweets are renowned for their rich, creamy textures and perfect balance of sweetness.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Jhal Muri',
            description: 'Puffed rice mixed with spices, mustard oil, chopped onions, green chilies, and sometimes raw mango. A popular street food snack, known for its spicy and tangy flavors.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Chana Pora',
            description: 'Roasted black chickpeas mashed with spices and mustard oil. Served as a snack or appetizer, offering a smoky and savory flavor.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Khichuri',
            description: 'A comforting dish of rice and lentils cooked together with spices and often served with fried eggplant or meat curry. A popular dish during rainy days or festivals, known for its simplicity and nourishing qualities.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Tok Doi',
            description: 'Sweet and sour yogurt, flavored with tamarind or green mango pulp. Offers a refreshing contrast of flavors, served as a side dish or accompaniment to spicy meals.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Bori Bhaja',
            description: 'Sun-dried lentil dumplings fried until crispy. Adds a crunchy texture and protein-rich element to Bengali meals, often used in various dishes.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Chingri Bhorta',
            description: 'Spicy mashed prawns mixed with onions, mustard oil, and green chilies. Provides a flavorful and spicy seafood dish, typically served with rice.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Kochu Bata',
            description: 'Taro root mashed with mustard oil, green chilies, and spices. Offers a spicy and earthy flavor, often served as a side dish with rice.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Shorshe Bata Maach',
            description: 'Fish (often carp or catfish) cooked in a spicy mustard seed paste. Known for its robust flavors and the unique pungency of mustard, a staple in Bengali households.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Aam Doi',
            description: 'Mango-flavored yogurt, thickened and sweetened, served as a dessert. Represents the seasonal delight of mangoes in Bengali cuisine, enjoyed chilled during summer.',
            image: ''
        },
        {
            type: 'Highlighted Food',
            name: 'Pithe',
            description: 'Various types of traditional Bengali sweets made from rice flour, often filled with coconut or jaggery. Celebrated during winter festivals like Poush Parbon for their sweetness and cultural significance.',
            image: ''
        }
    ]
};

// Inserting data into MongoDB
HighlightedFood.create(highlightedFoodData)
    .then(() => {
        console.log('Highlighted food data inserted');
        mongoose.connection.close(); // Close connection after insertion
    })
    .catch(err => console.error(err));
