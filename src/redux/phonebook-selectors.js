import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getContactsNames = state => {
  const allContacts = getAllContacts(state);
  return allContacts.reduce((arr, contact) => {
    arr.push(contact.name.toLowerCase());
    return arr;
  }, []);
};

const filteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
    return filteredContact;
  },
);

const getVisibleContacts = state => {
  const filter = getFilter(state);
  const filteredArr = filteredContacts(state);
  return filteredArr.length ? filter : '';
};

const getFilteredContact = state => {
  const allContacts = getAllContacts(state);
  const filteredArr = filteredContacts(state);
  return filteredArr.length ? filteredArr : allContacts;
};

export default {
  getAllContacts,
  getVisibleContacts,
  getFilteredContact,
  getContactsNames,
};
