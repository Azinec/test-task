/**
 * VAT tax calculate router
 */

const express = require('express');
const router = express.Router();

const MonthlyRateCalculate = require('../controllers/monthlyRateCalculate');

router.get('/', MonthlyRateCalculate.calculateMonthlyRate);

module.exports = router;
