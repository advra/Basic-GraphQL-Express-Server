const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    nft: {
        type: mongoose.Schema.Types.ObjectId,
    },
    status: {
        type: String,
        enum: ['Availible', 'Rented', 'Unlisted']
    }
});

module.exports = mongoose.model('Listing', ListingSchema);