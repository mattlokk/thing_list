<<<<<<< HEAD
import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Coffee'},
        {id: uuid(), name: 'Bread'},
    ]
}

export default function(state = initialState, action) {
    switch (action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
=======
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items:[],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING: 
            return{
                ...state,
                loading: true
            }
        default: return state;
>>>>>>> 02ccf8a54a90ab3aea293792f3a41d909965e5c3
    }
}