import {useState,useEffect} from 'react';
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

const  TodoInput = () =>  {
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();
   

    const {loading , todos , error} = useSelector((state) =>({
        loading: state.loading,
        todos: state.todos,
        error: state.error,
    }), function(prev , cur){
        if(prev.loading === cur.loading && prev.error===cur.error ){
            return true;
        }
        else{
            return false;
        }

    });


    const handleAdd = () =>  {
        dispatch(addTodoLoading());

        fetch("http://localhost:3001/todos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    id: uuid(),
                    title: title,
                    status: false, 
                }),
        })
        .then((data) =>{
           data.json();
        })

        .then((res) =>{
           dispatch(addTodoSuccess(res));
           getTodo();
        })

        .catch((err) => {       
            dispatch(addTodoError(err));
        })
    }

    useEffect(() => {
        getTodo();
    }, [])

    async function getTodo(){
        try{
            dispatch(getTodoLoading())
            const data = await fetch("http://localhost:3001/todos")
           .then((data) =>{
                data.json()
            })
             dispatch(getTodoSuccess(data));

        }catch(err){
          dispatch(getTodoError(err))
        }
    }

    return (
        <div>
            <h2>Add Todo</h2>
            <input value={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder="Add Todo"/>

             <button onClick={handleAdd}>Add</button>

             {
                 todos.map(e => <div>{e}</div>)
             }
        
        </div>

    )
}

export {TodoInput}
