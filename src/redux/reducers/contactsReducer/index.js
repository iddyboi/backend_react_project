import { types } from "../../types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Harry Winks",
      email: "Harry@gmail.com",
      phone: "0121932323",
      type: "personal",
    },
    {
      id: 2,
      name: "Sarah Winks",
      email: "Sarah@gmail.com",
      phone: "012192123323",
      type: "personal",
    },
  ],
  current: null,
  filtered: null,
};

export const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTACTS:
      return {
        ...state,
        players: action.payload,
      };

    case types.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case types.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case types.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case types.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case types.FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex || contact.email.match(regex));
        }),
      };
    case types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
