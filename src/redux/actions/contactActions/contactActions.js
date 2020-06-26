import { types } from "../../types";

export const addContact = (contact) => {
  contact.id = Math.floor(Math.random() * 1000000);
  return {
    type: types.ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: types.DELETE_CONTACT,
    payload: id,
  };
};

export const setCurrentContact = (contact) => {
  return {
    type: types.SET_CURRENT,
    payload: contact,
  };
};
export const clearCurrentContact = () => {
  return {
    type: types.CLEAR_CURRENT,
  };
};

export const updateContact = (contact) => {
  return {
    type: types.UPDATE_CONTACT,
    payload: contact,
  };
};

export const filterContacts = (text) => {
  return {
    type: types.FILTER_CONTACT,
    payload: text,
  };
};

export const clearFilter = () => {
  return {
    type: types.CLEAR_FILTER,
  };
};
