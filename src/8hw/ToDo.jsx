import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './store/actions';
import NewToDoForm from './components/NewToDoForm';
import ToDoList from './components/ToDoList';


function ToDo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if(text.trim().length) {
      dispatch(addToDo({text}));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewToDoForm
        value={text}
        updateText={setText}
        handleClick={handleClick}
      />
      <ToDoList />
    </div>
  );
}

export default ToDo;






// // 1.
// const Goods = () => {
/* //     const goods = useSelector(selectGoods);
//     console.log(goods); */
//     const dispatch = useDispatch();


//     useEffect(() => {
//         setTimeout(() => {
//             dispatch(addGood({ id: '4', name: 'Four' }))
//         }, 2000)
//     }, []);

//     return (
//         <div>{goods.map(item =>
//             <p>{item.id}  {item.name}</p>
//         )}

//         </div>
//     )

// }

// export default Goods;