const mongoose = require("mongoose");

const ambulanceServiceDetailSchema = new mongoose.Schema({
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
});

const ambulanceServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  result: [ambulanceServiceDetailSchema],
});

const modelName = "AmbulanceService";

module.exports = mongoose.model(modelName, ambulanceServiceSchema);
