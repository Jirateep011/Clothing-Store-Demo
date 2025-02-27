const mongoose = require('mongoose');

const clothingItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    size: {
        type: String,
        required: true,
        enum: ['S', 'M', 'L', 'XL', 'XXL']
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }
});

const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);

module.exports = {
    ClothingItem
};