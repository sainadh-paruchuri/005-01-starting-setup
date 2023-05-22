import React  from "react";
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
   
    <div className="expense-item">
      
      <div>{props.data.Date}</div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <h2>{props.data.LocationOfExpenditure}</h2>
        <div className="expense-item__price">{props.data.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
