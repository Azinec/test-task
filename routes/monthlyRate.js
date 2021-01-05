/**
 * VAT tax calculate router
 */

const express = require('express');
const router = express.Router();

const MonthlyRateCalculate = require('../controllers/monthlyRateCalculate');

router.post('/', MonthlyRateCalculate.calculateMonthlyRate);

module.exports = router;
