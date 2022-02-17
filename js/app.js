

document.getElementById('cal-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-field');
    const income = parseFloat(incomeInput.value);
    const food = document.getElementById('food-field').value;
    const rent = document.getElementById('rent-field').value;
    const colthes = document.getElementById('colthes-field').value;

    const totalExpence = parseFloat(food) + parseFloat(rent) + parseFloat(colthes);
    //const total = income - totalExpence;
    const netIncome = document.getElementById('total');
    netIncome.innerText = income - totalExpence;

    const Expense = document.getElementById('total-expense');
    Expense.innerText = totalExpence;




});