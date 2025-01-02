document.addEventListener('DOMContentLoaded', (event) => {
    const colors = [
        "#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f",
        "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ac",
        "#6f4e7c", "#ffcc33", "#b6d7a8", "#e06666", "#45818e",
        "#a64d79", "#76a5af", "#674ea7", "#c27ba0", "#6aa84f",
        "#f6b26b", "#e69138", "#3c78d8", "#8e7cc3", "#a8d08d",
        "#d5a6bd", "#6d9eeb", "#ffd966", "#93c47d", "#a4c2f4"
    ];


    const addExpensesBtn = document.getElementById('add-expenses-btn');
    const expensesList = document.getElementById('expenses-list');
    const expenseNameInput = document.getElementById('new-expense-name');
    const expenseAmountInput = document.getElementById('new-expense-value');
    const ctx = document.getElementById('myChart');
    let myChart; // Declare a variable to hold the chart instance.

    addExpensesBtn.addEventListener('click', addExpense);

    const expenses = [];

    function addExpense() {
        const name = expenseNameInput.value;
        const amount = expenseAmountInput.value;

        if (name == '' || amount == '' || amount <= 0) {
            return;
        }

        const expense = new Expense(name, amount);
        expenses.push(expense);

        const newExpenseItem = document.createElement('div');
        newExpenseItem.className = 'expense-item';
        newExpenseItem.innerHTML = `
            <span class="expense-name">${name}</span>
            <span class="expense-value">${amount} €</span>
        `;
        expensesList.appendChild(newExpenseItem);
        updateChart(expenses);
        clearInputs();
    }

    function updateChart(expenses) {
        // Destroy the existing chart instance if it exists.
        if (myChart) {
            myChart.destroy();
        }
        // Creates a pie chart for all expenses.
        const labels = expenses.map(expense => expense.name);
        const data = expenses.map(expense => expense.amount);
        const backgroundColor = expenses.map((expense, index) => colors[index % colors.length]);

        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Expenses in €',
                    data: data,
                    backgroundColor: backgroundColor,
                    borderWidth: 1
                }]
            }
        });
    }

    function clearInputs() {
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});

class Expense {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}