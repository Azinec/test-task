/**
 * Constants
 */
const { MONTH_LIMITS, RATE_LIMITS, FINAL_PAYMENT_LIMITS, MAIN_AMOUNT_LIMITS, DOWN_PAYMENT_LIMITS, MAIN_AMOUNT_MORE_DOWN_PAYMENT_LIMITS } = require('../constants/errors');

/**
 * Services
 */
const { monthlyPayment } = require('../services/monthlyRateCalculate');

describe('Calculation monthly payment tests', () => {
    it('should calculate monthly payment without errors.', async () => {
        const resultCalculation = monthlyPayment(10000, 0, 12, 0, 0);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({result: 833.33, errors: []});
    });

    //required params
    it('should calculate monthly payment with errors - main amount should be present.', async () => {
        const resultCalculation = monthlyPayment(undefined, 0, 12, 0, 0);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({result: 0, errors: [
                {
                "message": MAIN_AMOUNT_LIMITS,
                }
            ]});
    });

    // parse errors object
    it('should calculate monthly payment with errors - if main amount shouldn`t be equal or less 0.', async () => {
        const resultCalculation = monthlyPayment(0, 0, 12, 0, 0);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({result: 0, errors: [
                {
                    "message": MAIN_AMOUNT_LIMITS,
                },
                {
                    "message": MAIN_AMOUNT_MORE_DOWN_PAYMENT_LIMITS,
                },
            ]
        });
    });

    it('should calculate monthly payment with errors - down payment shouldn`t be more or equal main amount.', async () => {
        const resultCalculation = monthlyPayment(1000, 1000, 12, 0, 0);

        // Check actual result;
        expect(resultCalculation)
            .toEqual({result: 0, errors: [
                    {
                        "message": MAIN_AMOUNT_MORE_DOWN_PAYMENT_LIMITS,
                    },
                ]
            });
    });

});
