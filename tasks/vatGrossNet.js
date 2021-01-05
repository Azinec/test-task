const ERROR_MESSAGES = {
    GROSS_IS_NOT_NUMBER: 'Gross amount is not a number.',
    GROSS_CANT_BE_LESS: 'Gross amount cant be less then 0.',
    VAT_IS_NOT_NUMBER: 'VAT rate amount is not a number.',
    VAT_CANT_BE: 'VAT rate cant be more then 100 and less then 0 (in %).',
};

/**
 *
 * @param grossSum {Number}
 * @param vatRate {Number}
 */
const grossToNetWithVat = (grossSum, vatRate) => {
    grossSum = parseFloat(grossSum);
    vatRate = parseFloat(vatRate);
    if(isNaN(grossSum)) {
        return {
            resultCode: 400,
            errorMessage: ERROR_MESSAGES.GROSS_IS_NOT_NUMBER
        }
    }
    if(isNaN(vatRate)) {
        return {
            resultCode: 400,
            errorMessage: ERROR_MESSAGES.VAT_IS_NOT_NUMBER
        }
    }
    if(grossSum < 0) {
        return {
            resultCode: 400,
            errorMessage: ERROR_MESSAGES.GROSS_CANT_BE_LESS
        }
    }
    if (vatRate < 0 || vatRate > 100) {
        return {
            resultCode: 400,
            errorMessage: ERROR_MESSAGES.VAT_CANT_BE
        }
    }
    if(grossSum === 0) return 0;
    if(vatRate === 0) return grossSum;
    let numberNet = grossSum/(vatRate/100 + 1);
    return {
        resultCode: 200,
        resultMessage: numberNet
    }
}

module.exports = {
    ERROR_MESSAGES,
    grossToNetWithVat
}
