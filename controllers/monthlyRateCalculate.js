/**
 * Services
 */
const { monthlyPayment } = require('../services/monthlyRateCalculate');

/**
 * should be moved in helpers or other path based on project structure
 * @param parametersObject
 * @returns {{convertedNumMonths: number, convertedDownPayment: number, convertedMainAmount: number, convertedRate: number, convertedFinalPayment: number}}
 */
const convertParameters = (parametersObject) => {
    const { mainAmount, downPayment, numMonths, rate, finalPayment = 0 } = parametersObject;
    const convertedMainAmount = Number.isNaN(parseFloat(mainAmount)) ? undefined : parseFloat(mainAmount);
    const convertedDownPayment = Number.isNaN(parseFloat(downPayment)) ? undefined : parseFloat(downPayment);
    const convertedNumMonths = Number.isNaN(parseFloat(numMonths)) ? undefined : parseFloat(numMonths);
    const convertedRate = Number.isNaN(parseFloat(rate)) ? undefined : parseFloat(rate);
    const convertedFinalPayment = Number.isNaN(parseFloat(finalPayment)) ? undefined : parseFloat(finalPayment);
    return { convertedMainAmount, convertedDownPayment, convertedNumMonths, convertedRate, convertedFinalPayment };
}

/**
 * calculateMonthlyRate - simple controller method - all logic in monthlyRateCalculate service
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const calculateMonthlyRate = async (req, res) => {
    const { convertedMainAmount, convertedDownPayment, convertedNumMonths, convertedRate, convertedFinalPayment } = convertParameters(req.body);
    const resultCalculation = monthlyPayment(convertedMainAmount, convertedDownPayment, convertedNumMonths, convertedRate, convertedFinalPayment);
    if(resultCalculation.errors.length > 0) {
        return res.status(400).send({message: 'Failed', errors: resultCalculation.errors});
    }
    return res.send({ message: 'Ok', result: resultCalculation.result });
};

module.exports = {
    calculateMonthlyRate,
};
