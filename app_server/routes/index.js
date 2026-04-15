const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlParking = require('../controllers/parking');

router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
  .route('/location/:locationid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);

router.get('/about', ctrlOthers.about);

router.get('/parking', ctrlParking.parkingPage);

module.exports = router;
