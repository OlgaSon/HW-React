import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';
import { selectToDos } from "../store/selectors";


const ToDoList = () => {
    const todos = useSelector(selectToDos);

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          // key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;