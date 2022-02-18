import {
    ADD,
    REMOVE,
    CHANGE
} from './actionTypes'


export const addGood = (data) => ({
    type: ADD,
    payload: data
});

export const changeGoods = (data) => ({
    type: CHANGE,
    payload: {
        items: data
    }
});

export const removeGoods = (data) => ({
    type: REMOVE,
    payload: {
        items: data
    }
});