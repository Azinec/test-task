const { REQUIRED_PARAMS, MONTH_LIMITS } = require('../constants/errors');

/**
 * Services
 */

const vatTax = async (req, res) => {
    const { downPayment, numMonths, tazVat, finalPayment } = req.query;
    // console.log('res', res);
    console.log('downPayment', downPayment);
    console.log('numMonths', numMonths);
    console.log('tazVat', tazVat);
    console.log('finalPayment', finalPayment);
    if (!downPayment || !numMonths || !tazVat) return res.status(400).send({ message: REQUIRED_PARAMS });
    if (numMonths < 1 || numMonths > 12) return res.status(400).send({ message: MONTH_LIMITS });

    return res.send({ message: 'Ok', downPayment, numMonths, tazVat });
};

module.exports = {
    vatTax,
};
