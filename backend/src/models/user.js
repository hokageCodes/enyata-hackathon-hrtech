const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    passwordNeedsUpdate: {
        type: Boolean,
        default: true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        enum: ['employee', 'manager', 'admin'],
        default: 'employee',
    },
    salary: {
        type: Number,
        required: true,
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
    deleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
