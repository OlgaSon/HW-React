import {
  createStore,
} from 'redux'
// import { configureStore } from '@reduxjs/toolkit';
import {
  ADD,
  REMOVE,
  TOGGLE
} from './actionTypes'


let initialState = {
  todos: []
};

let toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {

      return {
        ...state.todos,
        todos: [...state.todos, {
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false
        }]
      };
    }

    case REMOVE: {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload.items.id)]
      };
    }

    case TOGGLE: {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.items.id);

      let completedItem = action.payload.items;

      console.log(completedItem)
      console.log(state.todos)
      return {
        ...state,
        todos: state.todos.map(todo => {
          let item = state.todos.find(item => item.id === completedItem);
          if (item) {
            let newCompleted = !state.todos.completed
            return {
              ...state.todos,
              id: state.todos.id,
              text: state.todos.text,
              completed: newCompleted
            }
          }
        })



      }
    }
    default:
      return state;
  }
}


export let store = createStore(toDoReducer);
// export default configureStore({
//   reducer: {
//     todos: toDoReducer,
//   },
// });