const mongoose = require('mongoose');
const Parking = mongoose.model('Parking');

const parkingList = (req, res) => {
    Parking.find().exec((err, parkings) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(parkings)
    });
};

const parkingCreate = (req, res) => {
  Parking.create({
    name: req.body.name,
    address: req.body.address,
    imgUrl: req.body.imgUrl,
    facilities: req.body.facilities
  }, (err, parking) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(201).json(parking);
  });
};

module.exports = {
    parkingList,
    parkingCreate
}