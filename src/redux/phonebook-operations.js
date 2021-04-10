import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = `http://localhost:4040`;

const getContacts = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { id: uuidv4(), name, number };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = Id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${Id}`)
    .then(() => dispatch(deleteContactSuccess(Id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default { getContacts, addContact, deleteContact };
