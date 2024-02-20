import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {purchase_books} from './BookAction'
import { sell_books } from './BookAction';
function BookContainer() {

   const noOfBooks = useSelector(state => state.NumberofBooks);
   const dispatch = useDispatch();
  return (
    <div>
     <h2>Total Books : {noOfBooks}</h2> 
     <button onClick={()=>(dispatch(purchase_books()))}>Buy Book</button>
     <button onClick={()=>(dispatch(sell_books()))}>Sell Book</button>
    </div>
  )
}

export default BookContainer
