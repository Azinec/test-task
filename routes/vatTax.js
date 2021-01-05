/**
 * VAT tax calculate router
 */

const express = require('express');
const router = express.Router();

const TaxCalculate = require('../controllers/taxCalculate');

router.get('/', TaxCalculate.vatTax);

module.exports = router;
