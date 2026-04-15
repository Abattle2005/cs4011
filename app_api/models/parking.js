const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  imgUrl: { type: String },
  facilities: {type: String}
});

mongoose.model('Parking', parkingSchema);