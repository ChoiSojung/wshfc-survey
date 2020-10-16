const mongoose = require('mongoose');


const siteSchema = new mongoose.Schema({
    siteName: String,
    siteAddress: String,
    siteCity: String,
    siteZip: String,
    siteGroupBeds: Number,
    siteNursingBeds: Number,
    siteMemoryBeds: Number,
    siteAssistedBeds: Number
});

const nonprofitSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    zip: String,
    contact: String,
    email: String,
    sites: [siteSchema]
});

mongoose.model('Nonprofit', nonprofitSchema);