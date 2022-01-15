import React from 'react';
import { useState,useEffect } from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {v4 as uuid} from 'uuid';


import {
    addTodo, 
    addTodoSuccess,
    addTodoLoading,
    addTodoError,
    getTodoLoading,
    getTodoError,
    getTodoSuccess
} from '../Redux/action';

export const Todo = () => {
    
    const [text,setText] =useState("");
    
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();

    return (
        <div>
             <input type="text" 
             placeholder="Todo" 
             value={text}
             onChange={(e) =>setText(e.target.value)}
             /> 

             <button onClick={()=>{
                  dispatch(addTodo(text));                 
             }}>Add</button>
             {
                 todos.map(e => <div>{e}</div>)
             }
        </div>
    )
}
