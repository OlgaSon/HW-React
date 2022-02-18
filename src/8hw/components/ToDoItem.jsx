import { useDispatch } from 'react-redux';
import {toggleComplete, removeToDo} from '../store/actions';
import './ToDoItem.css';


const ToDoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({id}))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeToDo({id}))}>&times;</span>
    </li>
  );
};


export default ToDoItem;