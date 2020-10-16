const mongoose = require('mongoose');
const Np = mongoose.model('Nonprofit');

const nonprofitsList = async(req, res)=>{
    let nonprofitsList = [];
    Np
        .find()
        .exec((err, thesenonprofits)=>{
            if(!thesenonprofits){
                console.log('Nonprofits not found');
                return res
                    .status(404)
                    .json({"message": "Nonprofits not found"});
            } else if (err){
                console.log('Nonprofits list error: ' + err);
                return res
                    .status(404)
                    .json(err);
            } else {
                nonprofits = thesenonprofits
                return res
                    .status(200)
                    .json(nonprofits);
            }
        });
};

const nonprofitsCreate = (req, res)=>{
    Np.create({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        contact: req.bdy.contact,
        email: req.body.email
    });
};

module.exports = {
    nonprofitsList,
    nonprofitsCreate
};