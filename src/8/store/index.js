import {
    createStore,
    // applyMiddleware
} from 'redux'
import {
    ADD,
    REMOVE,
    CHANGE
} from './actionTypes'


let initialState = {
    goods: [{
        id: '1',
        name: 'One'
    }, {
        id: '2',
        name: 'Two'
    }]
};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                goods: [...state.goods, action.payload]
            }
        }
        case REMOVE: {
            return {
                ...state,
                goods: state.goods.filter(item => item !== action.payload)
            };
        }
        case CHANGE: {
            let goods = state.goods;
            let items = action.payload.items;
            state.goods = [];
            return {
                ...state,
                goods: goods.map(good => {
                    let item = items.find(item => item.id === good.id);
                    if (item) {
                        return {
                            ...good,
                            name: item.name
                        }
                    }
                    return good;
                })
            }
        }
        default:
            return state;
    }
}


export let store = createStore(reducer);