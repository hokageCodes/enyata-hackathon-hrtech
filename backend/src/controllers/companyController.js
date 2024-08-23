const User = require('../models/user');
const Admin = require('../models/admin');
const Company = require('../models/company');

const getEmployeeCount = async (req, res) => {
    try {
        const count = await User.countDocuments({ company: req.user.company });
        res.json({ count });
    } catch (error) {
        console.error('Error fetching employee count:', error);
        res.status(500).json({ error: 'Failed to fetch employee count' });
    }
};

const getEmployees = async (req, res) => {
    try {
        const employees = await User.find({ company: req.user.company });
        res.json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
};

const getEmployeeDetail = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const employee = await User.findOne({ _id: employeeId, company: req.user.company });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error('Error fetching employee detail:', error);
        res.status(500).json({ error: 'Failed to fetch employee detail' });
    }
};

const getCompanyCount = async (req, res) => {
    try {
        const count = await Company.countDocuments();
        res.json({ count });
    } catch (error) {
        console.error('Error fetching company count:', error);
        res.status(500).json({ error: 'Failed to fetch company count' });
    }
};

const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
};

const getCompanyDetail = async (req, res) => {
    const { companyId } = req.params;

    try {
        const company = await Company.findOne({ _id: companyId });
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        console.error('Error fetching company detail:', error);
        res.status(500).json({ error: 'Failed to fetch company detail' });
    }
};

module.exports = {
    getEmployeeCount,
    getEmployees,
    getEmployeeDetail,
    getCompanyCount,
    getCompanies,
    getCompanyDetail
};