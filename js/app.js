function incomeCal() {
    const incomeInput = document.getElementById('income-field');
    const income = parseFloat(incomeInput.value);
    const food = document.getElementById('food-field').value;
    const rent = document.getElementById('rent-field').value;
    const colthes = document.getElementById('colthes-field').value;


    if (food < 0 || rent < 0 || colthes < 0) {
        alert('plz valid input');
        return //incomeExpenseCal;
    }
    //all expense addition
    const totalExpence = parseFloat(food) + parseFloat(rent) + parseFloat(colthes)
    //condition of total expense and income

    if (totalExpence < income) {
        const Expense = document.getElementById('total-expense');
        Expense.innerText = totalExpence;
        const netIncome = document.getElementById('total');
        netIncome.innerText = income - totalExpence;
    }
    else {
        alert('plz valid input')
    }
}

document.getElementById('cal-button').addEventListener('click', function () {


    incomeCal()


});

document.getElementById('save-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-field');
    const currentIncome = parseFloat(incomeInput.value);
    //incomeCal(currentIncome)
    const saveAmountFieldTex = document.getElementById('save-field');
    const saveAmountField = parseFloat(saveAmountFieldTex.value);

    const saveAmount = document.getElementById('sv-amount');

    //Saving Amount Calculation
    const SaveAmountCalcution = ((currentIncome * saveAmountField) / 100);


    const remainingBalance = document.getElementById('rm-balance');

    const remainigTotalIncome = document.getElementById('total');
    let totalRemaining = parseFloat(remainigTotalIncome.innerText);

    if (saveAmountField < 0) {
        alert('plz valid input');
    }
    else {
        // condition of total remaining and total Save
        if (totalRemaining > SaveAmountCalcution) {
            saveAmount.innerText = SaveAmountCalcution;
            const TotalRemainingBalance = totalRemaining - SaveAmountCalcution;
            remainingBalance.innerText = TotalRemainingBalance;
        }
        else {
            alert('plz valid input');


        }
    }


})