const express = require('express');
const router = express.Router();
const ctrlNonprofits = require('../controllers/nonprofits');

router
    .route('/nonprofits')
    .get(ctrlNonprofits.nonprofitsList)
    .post(ctrlNonprofits.nonprofitsCreate);

module.exports = router;