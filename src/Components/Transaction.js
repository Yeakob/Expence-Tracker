import React ,{useContext} from 'react'
import { GlobalContext } from '../Context/Globalstate';

export const Transaction = ({transaction}) => {
   
  const {Delete}= useContext(GlobalContext);
  const sign = transaction.amount<0?'-':'+';
  return (
    <li className={transaction.amount<0?'minus':'plus'}>
        {transaction.text} <span>{sign}{Math.abs(transaction.amount)}$</span><button onClick={()=>Delete(transaction.id)} className='delete-btn'>x</button>
      </li> 
  )
}
