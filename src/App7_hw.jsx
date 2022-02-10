import './App.css';
import React, { useState } from "react";
import { createStore } from 'redux'


let initialState = { hotels: [{ 'id': 1, 'name': 'one', 'rooms': 11, 'adress': 'Praça Marechal Humberto Delgado, 1549-004 Lisboa, Portugal' }, { 'id': 2, 'name': 'two', 'rooms': 22, 'adress': '545 Highland Ave, Clifton, NJ 07011, USA' }] };

let reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HOTELS_ADD': {
            return {
                ...state, hotels: [...state.hotels, ...action.payload]
            };
        }
        case 'HOTELS_REMOVE': {

            return {
                ...state, hotels: state.hotels.filter(item => item.id !== action.payload)
            };

            // action.payload.forEach(element => {
            //     console.log(element, state)
            //     return {
            //         ...state, hotels: state.hotels.filter(item => item.id != element)
            //     }
            // })
        }

        case 'HOTELS_CHANGE': {
            const hotelId = action.payload.id;
            const hotelName = action.payload.name;
            const hotelRooms = action.payload.rooms;
            const hotelAdress = action.payload.adress;

            const changeItemIndex = state.hotels.map(item => item.id === hotelId).indexOf(true);

            if (hotelName) state.hotels[changeItemIndex].name = hotelName;
            if (hotelRooms) state.hotels[changeItemIndex].rooms = hotelRooms;
            if (hotelAdress) state.hotels[changeItemIndex].adress = hotelAdress;

            return {
                ...state, hotels: [...state.hotels]
            };
        }

        default:
            return state;
    };
};


const addHotel = (hotel) => ({ type: 'HOTELS_ADD', payload: hotel });
const removeHotel = (hotel) => ({ type: 'HOTELS_REMOVE', payload: hotel });
const changeHotel = (hotel) => ({ type: 'HOTELS_CHANGE', payload: hotel });

let store = createStore(reducer);
store.dispatch(addHotel([
    { 'id': 3, 'name': 'three', 'rooms': 33, 'adress': 'Tooting Bec Rd, London SW17 8AR, Great Britain' },
    { 'id': 5, 'name': 'five', 'rooms': 55, 'adress': '121 77 Johanneshov, Sweden' }
]));
console.log(store.getState());
store.dispatch(removeHotel(2));
// store.dispatch(removeHotel([1, 2]));
console.log(store.getState());
store.dispatch(changeHotel({ 'id': 3, 'name': 'thirty three', 'rooms': 333 }));
console.log(store.getState());


function App7_hw() {
    return (<>App7_hw</>)
};


export default App7_hw;



/*	Необходимо с помощью редакс сделать хранилище по управлению отелями, 
где есть возможность удалить/добавить/изменить отель по его id. 
Отель представляет из себя обьект с полями: 
id, название, количество номеров и адрес. 
Продемонстрировать результаты работы в консоль. 
*Добавить возможность добавления/удаления/изменения нескольких отелей за раз */