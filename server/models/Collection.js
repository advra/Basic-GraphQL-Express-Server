const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    chain: {
        type: String,
    },
    totalSupply: {
        type: Number,
    },
    totalVolume: {
        type: Number,
    }
});

module.exports = mongoose.model('Collection', CollectionSchema);