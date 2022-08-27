import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/Globalstate';
export const AddTransaction = () => {

   const [text,setText]=useState('');
   const [amount,setAmount]=useState(0);
  const {Add} =useContext(GlobalContext);

  const onsubmit =(e)=>
  {
    e.preventDefault();

    const newTransaction ={
      id:Math.floor(Math.random()*100000000),
      text,
      amount:+amount
    }
    Add(newTransaction);
  }
  return (
    <div>
      
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
