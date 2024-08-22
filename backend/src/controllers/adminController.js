const User = require('../models/user');
const Admin = require('../models/admin');
const Company = require('../models/company');
const { generateToken, generateRefreshToken, verifyRefreshToken } = require('../utils/jwtUtils');

const registerSuperAdmin = async (req, res) => {
    const { fullname, username, email, password } = req.body;

    try {
        const superAdmin = new Admin({ fullname, username, email, password });
        await superAdmin.save();

        res.status(201).json({ message: 'SuperAdmin registered successfully' });
    } catch (error) {
        console.error('Error registering SuperAdmin:', error);
        res.status(500).json({ error: 'Failed to register SuperAdmin' });
    }
};

const loginSuperAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const superAdmin = await Admin.findOne({ email });
        if (!superAdmin || !(await superAdmin.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const payload = {
            userId: superAdmin._id,
            fullname: superAdmin.fullname,
            username: superAdmin.username,
            email: superAdmin.email,
            role: superAdmin.role,
        };
        const token = generateToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.json({ token, refreshToken });
    } catch (error) {
        console.error('Error logging in SuperAdmin:', error);
        res.status(500).json({ error: 'Failed to login SuperAdmin' });
    }
};

// Refresh token
const refreshToken = async (req, res) => {
    const { token } = req.body;

    try {
        const decoded = verifyRefreshToken(token);

        const superAdmin = await Admin.findById(decoded.userId);
        if (!superAdmin) {
            return res.status(401).json({ error: 'superAdmin not found' });
        }

        const payload = {
            userId: superAdmin._id,
            fullname: superAdmin.fullname,
            username: superAdmin.username,
            email: superAdmin.email,
            role: superAdmin.role,
        };

        const newToken = generateToken(payload);

        res.json({ token: newToken });
    } catch (error) {
        console.error('Error refreshing token:', error);
        res.status(500).json({ error: 'Failed to refresh token', error });
    }
};

const getUserProfile = async (req, res) => {
    try {
        const userProfile = await Admin.findById(req.user.userId).select('-password');

        if (!userProfile) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json({ userProfile });
    } catch (error) {
        console.error(error.response.data);
        res.status(500).json({ msg: "Server Error", error });
    }
};

const createAdmin = async (req, res) => {
    const { fullname, username, email, password, company, jobTitle, department, hireDate, salary, address, phone } = req.body;

    try {
        const admin = new User({ fullname, username, email, password, company, jobTitle, department, hireDate, salary, address, phone, role: 'admin' });
        await admin.save();

        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error('Error creating Admin:', error);
        res.status(500).json({ error: 'Failed to create Admin' });
    }
};

const createHR = async (req, res) => {
    const { fullname, username, email, password, company, jobTitle, department, hireDate, salary, address, phone } = req.body;

    try {
        const hr = new User({ fullname, username, email, password, company, jobTitle, department, hireDate, salary, address, phone, role: 'manager' });
        await hr.save();

        res.status(201).json({ message: 'HR created successfully' });
    } catch (error) {
        console.error('Error creating HR:', error);
        res.status(500).json({ error: 'Failed to create HR' });
    }
};

const createEmployee = async (req, res) => {
    const { fullname, username, email, password, company, jobTitle, department, hireDate, salary, address, phone } = req.body;

    try {
        const employee = new User({ fullname, username, email, password, company, jobTitle, department, hireDate, salary, address, phone, role: 'employee' });
        await employee.save();

        res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Failed to create employee' });
    }
};

const createCompany = async (req, res) => {
    const { name, domain, address, phone, email, website, contactPerson } = req.body;

    try {
        const existingCompany = await Company.findOne({ $or: [{ name }, { domain }] });

        if (existingCompany) {
            return res.status(400).json({ error: 'Company name or domain already exists' });
        }

        const company = new Company({ name, domain, address, phone, email, website, contactPerson });
        await company.save();

        res.status(201).json({ message: 'Company created successfully' });
    } catch (error) {
        console.error('Error creating company:', error);
        res.status(500).json({ error: 'Failed to create company' });
    }
};

module.exports = {
    registerSuperAdmin,
    loginSuperAdmin,
    refreshToken,
    getUserProfile,
    createAdmin,
    createHR,
    createCompany,
    createEmployee,
};
