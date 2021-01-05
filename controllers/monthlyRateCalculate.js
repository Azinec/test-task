/**
 * Services
 */
const { monthlyPayment } = require('../services/monthlyRateCalculate');

/**
 * calculateMonthlyRate - simple controller method - all logic in monthlyRateCalculate service
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const calculateMonthlyRate = async (req, res) => {
    const { mainAmount, downPayment, numMonths, rate, finalPayment = 0 } = req.body;

    const resultCalculation = monthlyPayment(mainAmount, downPayment, numMonths, rate, finalPayment);
    if(resultCalculation.errors.length > 0) {
        return res.status(400).send({message: 'Failed', errors: resultCalculation.errors});
    }
    return res.send({ message: 'Ok', result: resultCalculation.result });
};

module.exports = {
    calculateMonthlyRate,
};
