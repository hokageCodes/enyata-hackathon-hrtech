const express = require('express');
const router = express.Router();
const { isSuperAdmin, isAdmin, isHR, authMiddleware } = require('../middleware/authMiddleware');
const { getEmployeeCount, getEmployees, getEmployeeDetail, getCompanyCount, getCompanies, getCompanyDetail } = require('../controllers/companyController');

router.use(authMiddleware);

router.get('/employees/count', isHR, getEmployeeCount);

router.get('/employees', isHR, getEmployees);

router.get('/employees/:employeeId', isHR, getEmployeeDetail);

router.get('/count', isSuperAdmin, getCompanyCount);

router.get('/', isSuperAdmin, getCompanies);

router.get('/:companyId', isSuperAdmin, getCompanyDetail);

module.exports = router;