import React, {useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddTransaction = () => {

 const [text,setText] = useState("");
 const [amount,setAmount] = useState(0);
 const {addTransactions} = useContext(GlobalContext);
 const onSubmit = (e) =>{
    e.preventDefault();
    const newTransaction ={
      id: Math.floor(Math.random()*10000),
      text,
      amount:Number(amount),
    }
    if(text.length==0){
        toast.warning("Please enter description !")
        return ;
    }
    if(amount == 0){
      toast.warning("Amount cannot be zero !!");
      return;
    }
    
    addTransactions(newTransaction);
}
  return (
    <>
        <div>
          <h3>Add New transaction</h3>
          <form onSubmit={onSubmit}>
              <div className="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>{setText(e.target.value)}}/>
              </div>
              <div className="form-control">
                <label htmlFor="amount">Amount <br/>
                      (negative :- expense, positive :- income)
                </label>
                <input type="number"  placeholder="Enter amount..." value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
              </div>
              <button className="btn">Add transaction</button>
          </form >
        </div>
    </>
  )
}
