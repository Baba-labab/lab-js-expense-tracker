// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income";
    }
}

// Expense
class Expense extends Income {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance() {
        let totalIncome = 0;
        let totalExpenses = 0;
        for (let i = 0; i < this.entries.length; i++) {
            totalIncome += this.entries[i].income;
            totalExpenses += this.entries[i].expenses;
        }
        return totalIncome - totalExpenses;
    }

    getFormattedEntries() {
        let budget = [];
       //let expenses = [];

        this.entries.forEach(function (entry) {

            if (this.type === "income") {
                let formattedIncomes = `${entry.date} | ${entry.description} | ${entry.amount} € `;
                budget.push(formattedIncomes);
            } else if (this.type === "expense") {
                let formattedExpenses = `${entry.date} | ${entry.description} | -${entry.amount} €`;
                budget.push(formattedExpenses);
            }

        });
        return budget;
    }

}
