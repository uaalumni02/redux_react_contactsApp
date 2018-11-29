import * as types from './actionTypes';


export const Add = (contact) => {
    return {
        type: types.ADD,
        contact,
    }
}
export const Filter = (keyword) => {
    return {
        type: types.FILTER,
        keyword,
    }
}
export const Delete = (index) => {
    console.log(index, '--------------------')
    return {
        type: types.DELETE,
        index,
    }
}