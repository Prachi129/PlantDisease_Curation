const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    disease: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
console.log('i am here');
const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
