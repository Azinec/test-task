# test-task

### Before start
``` npm install ```
### Run tests:
``` npm run tests ```

### Task 1. API monthly payment

``` npm start ```

In browser reach url - http://localhost:3000/
- fill form
- click on Calculate button
- check result

Params:
- Amount (Main amount) - initial amount for calculation
- Down payment - amount we subtract from Main amount before calculation
- Number of months - number of months for calculation monthly rate
- Interested rate - rate for the year (should be transferred for monthly use)
- Final payment (optional) - amount that should stay after all monthly payments

Notes:
- all cases you find in tests "tests/calculation.unit.test.js"

### Task 2. Gross to Net calculation
You can use 2 ways for checking:
- you can use terminal: firstly, go to file tasks/vatGrossNet.js and uncomment code based on a hint. After that got to terminal and run ``` node tasks/vatGrossNet.js ```
- you can check how it works with test in "tests/grossToNet.unit.test.js"

### Task 3. Custom flat method for array
You can use 2 ways for checking:
- you can use terminal: firstly, go to file tasks/flatCustom.js and uncomment code based on a hint. After that got to terminal and run ``` node tasks/flatCustom.js ```
- you can check how it works with test in "tests/flatCustom.unit.test.js"
