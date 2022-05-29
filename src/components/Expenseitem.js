import './Expenseitem.css'
import Expensedate from './Expensedate';
import Card from './Card';
import React, { useState }  from 'react'
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function ifclicked() 
  {
       setTitle('updated!!');
       console.log(title);
  }

 return (
    <Card className="expense-item">
        <Expensedate date={props.date}/>
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={ifclicked}></button>
      </Card>
    
  );
}
export default ExpenseItem;
