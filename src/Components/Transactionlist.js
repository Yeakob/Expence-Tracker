import React,{useContext} from 'react';
import { GlobalContext } from '../Context/Globalstate';
import { Transaction } from './Transaction';

export const Transactionlist = () => {

  const {transactions}=useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction=>(
        <Transaction transaction={transaction} key={transaction.id} />
        ))}
        
      </ul>
    </div>
  )
}

export default Transactionlist


