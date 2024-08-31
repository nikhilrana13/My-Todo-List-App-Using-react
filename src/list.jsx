
import React, { useState } from 'react'

import './style.css'

 const List = () => {

    const[input,setInput] = useState('')

    const[items,setItems] = useState([])

    const addItem = () => {

      if(input.trim() !== ''){
        setItems([...items,input])
        setInput('')
      }
    };

    const removeitem = (index)=>{
        const newitems = items.filter((_, item)=> item !== index);
        setItems(newitems);
    }



  return (
    <div className='Main'>
      <h1>My Todo List</h1>
      <div className="input-field">
        <input type="text" value={input}  onChange ={(e)=>setInput(e.target.value)}id="input" placeholder="Add your new todo here" />
        <button onClick={addItem}>Add</button>
      </div>

      <ul>
        {items.map((item,index) => <li key={index}>{item}
        <button onClick={() => removeitem(index)}>Remove</button>
        </li>)}
      </ul>

    </div>
  )
}

export default List

