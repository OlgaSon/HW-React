import {
    ADD,
    REMOVE,
    TOGGLE
} from './actionTypes'


export const addToDo = (data) => ({
    type: ADD,
    payload: data
});

export const toggleComplete = (data) => ({
    type: TOGGLE,
    payload: {
        items: data
    }
});

export const removeToDo = (data) => ({
    type: REMOVE,
    payload: {
        items: data
    }
});