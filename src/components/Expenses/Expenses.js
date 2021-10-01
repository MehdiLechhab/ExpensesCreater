import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("Show All");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("Expenses.js");
        console.log(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        if (filteredYear !== "Show All") {
            return expense.date.getFullYear().toString() === filteredYear
        }else{
            return true
        }
        
    });

    

    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler}  />
                <ExpensesList expenses={filteredExpenses} />
                
                
                
            </Card>
        </div>
    )
}


export default Expenses;