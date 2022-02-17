function incomeExpenseCal() {
    const incomeInput = document.getElementById('income-field');
    const income = parseFloat(incomeInput.value);
    const food = document.getElementById('food-field').value;
    const rent = document.getElementById('rent-field').value;
    const colthes = document.getElementById('colthes-field').value;

    const totalExpence = parseFloat(food) + parseFloat(rent) + parseFloat(colthes);
    //const total = income - totalExpence;


    const Expense = document.getElementById('total-expense');
    Expense.innerText = totalExpence;
    const netIncome = document.getElementById('total');
    netIncome.innerText = income - totalExpence;
}

document.getElementById('cal-button').addEventListener('click', function () {


    incomeExpenseCal()


});

document.getElementById('save-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-field');
    const income1 = parseFloat(incomeInput.value);
    const saveAmountFieldTex = document.getElementById('save-field');
    const saveAmountField = parseFloat(saveAmountFieldTex.value);

    const saveAmount = document.getElementById('sv-amount');


    const TotalSaveAmount = ((income1 * saveAmountField) / 100);
    //console.log(TotalSaveAmount);
    saveAmount.innerText = TotalSaveAmount;
    const remainingBalance = document.getElementById('rm-balance');

    const remainigTotalIncome = document.getElementById('total');
    let totalIncomeRemaining = parseFloat(remainigTotalIncome.innerText);

    const TotalRemainingBalance = totalIncomeRemaining - TotalSaveAmount;
    remainingBalance.innerText = TotalRemainingBalance;





})