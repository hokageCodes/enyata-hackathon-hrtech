const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    domain: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    website: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: false,
    },
    contactPerson: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
