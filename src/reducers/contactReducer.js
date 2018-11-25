import * as types from '../actions/actionTypes';
import initialState from './initialState';



const contactReducer = (state = initialState.contacts, action) => {
    switch(action.type) {
        case types.ADD: {
        const contacts = state.filter(val => val);
        contacts.push(action.contact);
        return contacts

        }

 case types.FILTER: {
    const contacts = [...state.contacts].filter(contact => {
           contacts.first_name.toLowerCase().includes(action.keyword)
        || contacts.last_name.toLowerCase().includes(action.keyword);
          });
          return {
              ...state, 
              contacts,
          }
    }

     case types.DELETE: {
        const contacts = [...state];
        contacts.splice(action.index, 1);
        return contacts;
    }

    default:
        return state;
}
return state;
}


export default contactReducer;

