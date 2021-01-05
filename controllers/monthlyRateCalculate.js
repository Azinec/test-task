const { REQUIRED_PARAMS, MONTH_LIMITS } = require('../constants/errors');

/**
 * Services
 */

const calculateMonthlyRate = async (req, res) => {
    const { downPayment, numMonths, rate, finalPayment } = req.query;
    console.log('downPayment', downPayment);
    console.log('numMonths', numMonths);
    console.log('rate', rate);
    console.log('finalPayment', finalPayment);
    if (!downPayment || !numMonths || !rate) return res.status(400).send({ message: REQUIRED_PARAMS });
    if (numMonths < 1 || numMonths > 12) return res.status(400).send({ message: MONTH_LIMITS });

    return res.send({ message: 'Ok', downPayment, numMonths, rate });
};

module.exports = {
    calculateMonthlyRate,
};
