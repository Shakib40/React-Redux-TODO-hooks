import React from 'react'
import {useSelector} from 'react-redux';

const TodoList = () => {

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


    // return loading ? (
    //     <div>Loading.....</div>
    // ) : error ? (
    //  <div>Error.....</div>   
    // ) : (
    //     <div>

    //         {
    //             todos.map((todo) =>(
    //                 <div key={todo.id}>{todo.title}</div>
    //             ))
    //         }
    //     </div>
    // )

    return (
        <div>
            
            {
                todos.map((todo) =>(
                    <div key={todo.id}>{todo.title}</div>
                ))
            }
        </div>
    )
}

export {TodoList}
