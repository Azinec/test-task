/**
 *
 * @param grossSum {Number}
 * @param vatRate {Number}
 */
function grossToNetWithVat(grossSum, vatRate) {
    grossSum = parseFloat(grossSum);
    vatRate = parseFloat(vatRate);
    if(isNaN(grossSum)) {
        return {
            resultCode: 400,
            resultMessage: 'Gross amount is not a number.'
        }
    }
    if(isNaN(vatRate)) {
        return {
            resultCode: 400,
            errorMessage: 'VAT rate amount is not a number.'
        }
    }
    if(grossSum < 0) {
        return {
            resultCode: 400,
            errorMessage: 'Gross amount cant be less then 0.'
        }
    }
    if (vatRate < 0 && vatRate > 100) {
        return {
            resultCode: 400,
            resultMessage: 'VAT rate cant be more then 100 and less then 0 (in %).'
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
