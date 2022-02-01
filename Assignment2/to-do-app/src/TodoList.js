import React from 'react'
import './index.css'
const TodoList = ({todolist,deleteHandler}) =>{
    return (

        <div className="deladd">
            {todolist.map((todo,index)=>
            <div key = {index}>
                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input><label for= "packers" class="strikethrough">&nbsp;{todo} &nbsp; <button onClick={()=> deleteHandler(index)}>❌</button></label>
                
            </div>)}

        </div>
    )
}
export default TodoList