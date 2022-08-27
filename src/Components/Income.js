import React,{useContext} from 'react'
import { GlobalContext } from '../Context/Globalstate';


export const Income = () => {
  const {transactions} =useContext(GlobalContext);
  const amounts= transactions.map(Transaction=>Transaction.amount);
  const income=amounts
  .filter(item=>item>0)
  .reduce((acc,item)=>(acc+=item),0)
  .toFixed(0);

  const Expense=(amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(0)
  return (
  <>
  <div className='inc-exp-container'>
         <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">{income}$</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">{Expense}$</p>
        </div>
  </div>
  
  </>
  )
}
export default Income;