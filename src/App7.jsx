import './App.css';
import React, { useState } from "react";
import { createStore, combineReducers } from 'redux'
import { getCombinedNodeFlags } from 'typescript';


// 1.
// let initialState = {counter: 0};

// let reducer = ( state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       return {
//         ...state, counter: state.counter + action.payload
//       };
//     }
//     case 'DECREMENT': {
//       return {
//         ...state, counter: state.counter - action.payload
//       };
//     }
//     default:
//       return state;
//   };
// };

// let store = createStore(reducer);
// console.log(store.getState());
// store.dispatch({type: 'INCREMENT', payload: 5});
// console.log(store.getState());
// store.dispatch({type: 'DECREMENT', payload: 3});
// console.log(store.getState());



// 2. Сделать редьюсер с первоначальным состоянием {goods: []}. 
// Добавить экшн на добавление и удаление товара.


// let initialState = { goods: ['1', "2", 3] };

// let reducerOne = (state = initialState, action) => {

//   switch (action.type) {
//     case 'GOODS_ADD': {
//       return {
//         ...state, goods: [...state.goods, action.payload]
//       };
//     }
//     case 'GOODS_REMOVE': {
//       return {
//         ...state, goods: state.goods.filter(item => item !== action.payload)
//       };
//     }
//     default:
//       return state;
//   };
// };


// let reducerTwo = (state = { counter: 0 }, action) => {
//   return state;
// };


// const rootReducer = combineReducers({
//   goodsReducer: reducerOne,
//   counterReducer: reducerTwo
// })


// const addGood = (good) => ({ type: 'GOODS_ADD', payload: good });
// const removeGood = (good) => ({ type: 'GOODS_REMOVE', payload: good });

// let store = createStore(rootReducer);
// store.dispatch(addGood('22'));
// console.log(store.getState());
// store.dispatch(removeGood('2'));
// console.log(store.getState());




// 3. Сделать редюсер с первоначальным состоянием {todos: [] }.
// Type Todo {id, name, isComplited}.
//  Добавить экшен на добавление, удаление задачи и установку статуса выполненной.


let initialState = { todos: [{'id': 1, 'name': 'one', 'isComleted': false}, {'id': 2, 'name': 'two', 'isCompleted': true}] };

let reducer3 = (state = initialState, action) => {

  switch (action.type) {
    case 'TODOS_ADD': {
      return {
        ...state, todos: [...state.todos, action.payload]
      };
    }
    case 'TODOS_REMOVE': {
      let id = action.payload.id;
      return {
        ...state, todos: state.todos.filter(item => item.id !== id)
      };
    }

    case 'TODOS_COMPLETED': {
      const id = action.payload;
      const completedItemIndex = state.todos.map(item => item.id === id).indexOf(true);
      state.todos[completedItemIndex].isCompleted =!completedItemIndex.isCompleted;
      
      return {
        ...state, todos: [...state.todos]
      };
    }

    default:
      return state;
  };
};


const addTodo = (todo) => ({ type: 'TODOS_ADD', payload: todo });
const removeTodo = (todo) => ({ type: 'TODOS_REMOVE', payload: todo });
const completeTodo = (todo) => ({ type: 'TODOS_COMPLETED', payload: todo });

let store = createStore(reducer3);
store.dispatch(addTodo({'id': 3, 'name': 'three', 'isCompleted': false}));
console.log(store.getState());
store.dispatch(removeTodo({'id': 2, 'name': 'three', 'isCompleted': false}));
console.log(store.getState());
store.dispatch(completeTodo(3));
console.log(store.getState());


function App7() {
  return (<>APP  </>)
};


export default App7;