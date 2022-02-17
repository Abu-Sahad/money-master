
function inputFields(inputFieldId) {
    const inputValue = document.getElementById(inputFieldId);
    const getInputValue = inputValue.value;
    const getInputValueParse = parseFloat(getInputValue);
    return getInputValueParse;
}

document.getElementById('cal-button').addEventListener('click', function () {
    const income = inputFields('income-field');
    const food = inputFields('food-field');
    const rent = inputFields('rent-field');
    const clothes = inputFields('clothes-field');

    if (food < 0 || rent < 0 || clothes < 0) {
        alert('Please Enter valid input');
    }
    else {
        //all expense addition
        const totalExpence = food + rent + clothes;
        //condition of total expense and income
        if (totalExpence < income) {
            const Expense = document.getElementById('total-expense');
            Expense.innerText = totalExpence;
            const netIncome = document.getElementById('total');
            netIncome.innerText = income - totalExpence;
        }
        else {
            alert('Please Enter valid input');
        }
    }
});

document.getElementById('save-button').addEventListener('click', function () {
    const currentIncome = inputFields('income-field');
    const saveAmountField = inputFields('save-field');
    const saveAmount = document.getElementById('sv-amount');
    //Saving Amount Calculation
    const SaveAmountCalcution = ((currentIncome * saveAmountField) / 100);
    const remainingBalance = document.getElementById('rm-balance');
    const remainigTotalIncome = document.getElementById('total');
    let totalRemaining = parseFloat(remainigTotalIncome.innerText);

    if (saveAmountField < 0) {
        alert('Please Enter valid input');
    }
    else {
        // condition of total remaining and total Save
        if (totalRemaining >= SaveAmountCalcution) {
            saveAmount.innerText = SaveAmountCalcution;
            const TotalRemainingBalance = totalRemaining - SaveAmountCalcution;
            remainingBalance.innerText = TotalRemainingBalance;
        }
        else {
            alert('Insufficient balance to you account');
        }
    }
});
