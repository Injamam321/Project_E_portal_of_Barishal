const mongoose = require("mongoose");
const { MONGO_URI } = require("../constants");

const uri = MONGO_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//Define detail schema
const realEstateDetailSchema = new mongoose.Schema({
  type: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  contact: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },

  Location: {
    type: String,
    required: false,
  },
});
//Define service schema
const realEstateServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  result: [realEstateDetailSchema],
});
// Create model based on the schema
const realEstateService = mongoose.model("RealEstate", realEstateServiceSchema);

// Data to be inserted
const realEstateServiceData = {
  name: "Real Estate Service in Barisal",
  type: "Others",
  image: "", // Add URL for image if available
  slug: "realEstate",
  description: "List of RealEstate Service of Barisal",
  result: [
    {
      type: "RealEstate",
    },
  ],
};

// Inserting data into MongoDB
realEstateService
  .create(realEstateServiceData)
  .then(() => {
    console.log("realEstate service data inserted");
    mongoose.connection.close(); // Close connection after insertion
  })
  .catch((err) => console.error(err));
