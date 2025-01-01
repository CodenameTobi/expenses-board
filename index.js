document.addEventListener('DOMContentLoaded', (event) => {
    const overviewContainer = document.getElementById('overview-container');
    const addCategoryContainer = document.getElementById('add-cat-container');
    const addExpensesContainer = document.getElementById('add-exp-container');

    const categoryNameInput = document.getElementById('new-category-name');

    const openCategoryBtn = document.getElementById('open-category-btn');
    const addCategoryBtn = document.getElementById('add-category-btn');
    const openExpensesBtn = document.getElementById('open-expenses-btn');
    const addExpensesBtn = document.getElementById('add-expenses-btn');

    openCategoryBtn.addEventListener('click', toggleCategoryClick);
    addCategoryBtn.addEventListener('click', addCategory);
    openExpensesBtn.addEventListener('click', toggleExpenseClick);
    addExpensesBtn.addEventListener('click', addExpense);


    function toggleCategoryClick() {
        overviewContainer.classList.toggle('show');
        addCategoryContainer.classList.toggle('show');
    }
    function addCategory() {
        let name = categoryNameInput.value;
        console.log(name);
        if (name !== '') {
            // Add the category to the list-expense-container list.


            // If it is the first added category then remove the disabled from the add expense button.
            openExpensesBtn.disabled = false;

            // Update the visibility of the containers.
            toggleCategoryClick();
        }
    }

    function toggleExpenseClick() {
        overviewContainer.classList.toggle('show');
        addExpensesContainer.classList.toggle('show');
    }

    function addExpense() {
        // Get the data for the Expense:
        // - category it belongs to
        // - the name
        // - the value in €

        // Check validity.
        if (true) {
            toggleExpenseClick();
        }
    }
});

