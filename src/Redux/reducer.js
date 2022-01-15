// import  {crea}
// import {
//     ADD_TODO_ERROR,
//     ADD_TODO_LOADING,
//     ADD_TODO_SUCCESS,
//     GET_TODO_ERROR,
//     GET_TODO_LOADING,
//     GET_TODO_SUCCESS,
//     UPDATE_TODO_ERROR,
//     UPDATE_TODO_LOADING,
//     UPDATE_TODO_SUCCESS,
//     REMOVE_TODO_ERROR,
//     REMOVE_TODO_LOADING,
//     REMOVE_TODO_SUCCESS,
//     DETAILS_TODO_ERROR,
//     DETAILS_TODO_LOADING,
//     DETAILS_TODO_SUCCESS,
//   } from "./actionType";

const initialState = { loading: false, todos:[] , error: false };

  
const reducer = ( state = initialState , {type,payload}) => {
    switch (type) {
        case  "ADD_TODO" : {
            return {
                ...state,
                todos: [ ...state.todos,payload]
            }
        }

        case  "ADD_TODO_LOADING" : {
            return {
                ...state,
                loading: true,
            }
        }

        case  "ADD_TODO_SUCCESS" : {
            return {
                ...state,
                todos: [ ...state.todos,payload],
                loading: false,
            }
        }

        case  "ADD_TODO_ERROR" : {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        
        case  "GET_TODO_LOADING" : {
            return {
                ...state,
                loading: true,
                
            }
        }

        case  "GET_TODO_SUCCESS" : {
            return {
                ...state,
                todos: payload,
                loading: false,
                error: false,
            }
        }

        case  "GET_TODO_ERROR" : {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        // case GET_TODO_LOADING:
        //     return {
        //       ...state,
        //       loading: true,
        //       error: false,
        //     };
        //   case GET_TODO_SUCCESS:
        //     return {
        //       ...state,
        //       data: payload,
        //       total: payload.filter((e) => {
        //         if (!e.completed) return e;
        //       }),
        //       loading: false,
        //       error: false,
        //     };
        //   case GET_TODO_ERROR:
        //     return {
        //       ...state,
        //       error: true,
        //       loading: false,
        //     };

        default:
            return state
    }
};

export {reducer}