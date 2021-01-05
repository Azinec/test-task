/**
 * Services
 */
const {ERROR_MESSAGES, grossToNetWithVat} = require('../tasks/vatGrossNet');

describe('Gross to Net with VAT rate calculation tests', () => {
    it('should calculate gross to net without errors.', async () => {
        const resultCalculation = grossToNetWithVat(150, 20);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({resultCode: 200, resultMessage: 125});
    });

    //required params
    it('should calculate gross to net with errors - gross amount should be present.', async () => {
        const resultCalculation = grossToNetWithVat(undefined, 20);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({
                resultCode: 400,
                errorMessage: ERROR_MESSAGES.GROSS_IS_NOT_NUMBER
            });
    });

    it('should calculate gross to net with errors - rate amount should be present.', async () => {
        const resultCalculation = grossToNetWithVat(150, undefined);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({
                resultCode: 400,
                errorMessage: ERROR_MESSAGES.VAT_IS_NOT_NUMBER
            });
    });

    it('should calculate gross to net with errors - rate amount cant be more then 100 and less then 0.', async () => {
        const resultCalculation = grossToNetWithVat(150, 101);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({
                resultCode: 400,
                errorMessage: ERROR_MESSAGES.VAT_CANT_BE
            });
    });

    it('should calculate gross to net with errors - gross amount cant be less then 0.', async () => {
        const resultCalculation = grossToNetWithVat(-1, 101);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({
                resultCode: 400,
                errorMessage: ERROR_MESSAGES.GROSS_CANT_BE_LESS
            });
    });
});
