import './App.css';
import React, { useState } from "react";
import { createStore } from 'redux'


let initialState = {
    hotels:
        [{ 'id': 1, 'name': 'one', 'rooms': 11, 'adress': 'Praça Marechal Humberto Delgado, 1549-004 Lisboa, Portugal' },
        { 'id': 2, 'name': 'two', 'rooms': 22, 'adress': '545 Highland Ave, Clifton, NJ 07011, USA' },],
};

let reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HOTELS_ADD': {
            return {
                ...state, hotels: [...state.hotels, ...action.payload]
            };
        };
        case 'HOTELS_REMOVE': {
            action.payload.forEach(element => {
                const delItemIndex = state.hotels.map(item => item.id === element).indexOf(true);
                state.hotels.splice(delItemIndex, 1)
            });
            return { ...state, hotels: [...state.hotels] }
        };
        case 'HOTELS_CHANGE': {
            let hotels = state.hotels;
            let items = action.payload;
            return {
                ...state, hotels: hotels.map(hotel => {
                    let item = items.find(item => item.id === hotel.id);
                    if (item) {
                        if (item.name && item.rooms && item.adress)
                            return { ...hotel, name: item.name, rooms: item.rooms, adress: item.adress }
                        else
                            if (item.name && item.rooms && !item.adress)
                                return { ...hotel, name: item.name, rooms: item.rooms, adress: hotel.adress }
                            else
                                if (item.name && !item.rooms && item.adress)
                                    return { ...hotel, name: item.name, rooms: hotel.rooms, adress: item.adress }
                                else
                                    if (!item.name && !item.rooms && item.adress)
                                        return { ...hotel, name: hotel.name, rooms: hotel.rooms, adress: item.adress }
                                    else
                                        if (!item.name && item.rooms && !item.adress)
                                            return { ...hotel, name: hotel.name, rooms: item.rooms, adress: hotel.adress }
                                        else
                                            if (!item.name && !item.rooms && !item.adress)
                                                return { ...hotel, name: hotel.name, rooms: hotel.rooms, adress: hotel.adress }
                                            else
                                                if (!item.name && item.rooms && item.adress)
                                                    return { ...hotel, name: hotel.name, rooms: item.rooms, adress: item.adress }
                                                else
                                                    if (item.name && !item.rooms && !item.adress)
                                                        return { ...hotel, name: item.name, rooms: hotel.rooms, adress: hotel.adress };
                    };
                    return hotel;
                })
            };
        };
        default:
            return state;
    };
};


const addHotels = (hotels) => ({ type: 'HOTELS_ADD', payload: hotels });
const removeHotels = (hotels) => ({ type: 'HOTELS_REMOVE', payload: hotels });
const changeHotels = (hotels) => ({ type: 'HOTELS_CHANGE', payload: hotels });

let store = createStore(reducer);
console.log(store.getState().hotels);

store.dispatch(addHotels([
    { 'id': 3, 'name': 'three', 'rooms': 33, 'adress': 'Tooting Bec Rd, London SW17 8AR, Great Britain' },
    { 'id': 5, 'name': 'five', 'rooms': 55, 'adress': '121 77 Johanneshov, Sweden' }
]));
console.log(store.getState().hotels);

store.dispatch(removeHotels([1, 5]));
console.log(store.getState().hotels);

store.dispatch(changeHotels([
    {
        'id': 2,
        // 'name': 'twenty two',
        'rooms': 222,
        'adress': '545 Highland Ave, Clifton, NJ 07011, USA'
    },
    {
        'id': 3,
        'name': 'thirty three',
        // 'rooms': 333
    },
]));
console.log(store.getState().hotels);


function App7_hw() {
    return (<>App7_hw</>)
};


export default App7_hw;
// точки останова: 75, 81, 84



/*	Необходимо с помощью редакс сделать хранилище по управлению отелями, 
где есть возможность удалить/добавить/изменить отель по его id. 
Отель представляет из себя обьект с полями: 
id, название, количество номеров и адрес. 
Продемонстрировать результаты работы в консоль. 
*Добавить возможность добавления/удаления/изменения нескольких отелей за раз */