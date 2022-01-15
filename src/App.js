import './App.css';
import {TodoInput} from './Components/TodoInput';
import {TodoList} from './Components/TodoList';

import {Todo} from './Components/Todo';


function App() {
  return (
    <div className="App">
     <TodoInput/>
     <TodoList/>
     
     <Todo/>
    </div>
  );
}

export default App;
