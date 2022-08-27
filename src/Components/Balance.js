import React,{useContext} from 'react'
import { GlobalContext } from '../Context/Globalstate';

export const Balance = () => {

  const {transactions} =useContext(GlobalContext);
  const amounts=transactions.map(Transaction=>Transaction.amount);
  const total =amounts.reduce((acc,item)=>(acc+=item),0).toFixed(0);
  return (
    <>
    <h4>Your Balance</h4>
    <h1 id="balance">{total}$</h1>
    </>
  )
}
export default Balance;