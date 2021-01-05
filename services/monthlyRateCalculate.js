/**
 * Constants
 */
const { MONTH_LIMITS, RATE_LIMITS, FINAL_PAYMENT_LIMITS, MAIN_AMOUNT_LIMITS, DOWN_PAYMENT_LIMITS, MAIN_AMOUNT_MORE_DOWN_PAYMENT_LIMITS } = require('../constants/errors');

/**
 * Validation function for parameters
 *
 * should be moved to validations helpers, or utils, or services - depends on project structure
 */
const validationParameters = (mainAmount, downPayment, numMonths, rate, finalPayment) => {
    const errorsArray = [];

    if (mainAmount === undefined || mainAmount <= 0) errorsArray.push({ message: MAIN_AMOUNT_LIMITS });
    if (downPayment === undefined || downPayment < 0) errorsArray.push({ message: DOWN_PAYMENT_LIMITS });
    if (mainAmount <= downPayment) errorsArray.push({ message: MAIN_AMOUNT_MORE_DOWN_PAYMENT_LIMITS });
    if (numMonths === undefined || numMonths < 1) errorsArray.push({ message: MONTH_LIMITS });
    if (rate === undefined || rate < 0) errorsArray.push({ message: RATE_LIMITS });
    if (finalPayment < 0) errorsArray.push({ message: FINAL_PAYMENT_LIMITS });

    return errorsArray;
}

/**
 * monthlyPayment function - calculation of monthly payment based on user inputs
 *
 * @param mainAmount
 * @param downPayment
 * @param numMonths
 * @param rate
 * @param finalPayment
 * @returns {{result: Number, errors: []}}
 */
const monthlyPayment = (mainAmount, downPayment, numMonths, rate, finalPayment) => {
    const errors = validationParameters(mainAmount, downPayment, numMonths, rate, finalPayment);
    if(errors.length > 0) return { result: 0, errors };
    // preparedRate - rate should be reduced from percentage to number view - for it we divide rate on 100 (based number of %) and 12 (number of months)
    let preparedRate = rate/1200;
    // checkedAmount - we should subtract down payment and final payment (if present)
    let checkedAmount = mainAmount - downPayment;
    if(finalPayment) {
        checkedAmount -= finalPayment;
    }
    // if preparedRate equal 0 - we should return checkedAmount divided on number of months
    if(preparedRate === 0) return { result: parseFloat((checkedAmount/numMonths).toFixed(2)), errors: [] };
    // based on formula we calculate for monthly payment amount
    let monthlyPaymentResult = (checkedAmount * preparedRate) * (Math.pow(1 + preparedRate, numMonths)) / (Math.pow(1 + preparedRate, numMonths) - 1);
    return { result: parseFloat(monthlyPaymentResult.toFixed(2)), errors: [] };
};

module.exports = {
    monthlyPayment,
}
