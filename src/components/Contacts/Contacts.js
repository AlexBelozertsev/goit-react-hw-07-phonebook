import React from 'react';
import { connect } from 'react-redux';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';
import Contact from './Contact';
import { phonebookOperations, selectors } from '../../redux';

const Contacts = ({ list, onDeliteContact }) => {
  return (
    <div className={style.contactsContainer}>
      <ul className={style.contactsList}>
        {list.length > 0 &&
          list.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <Contact
                name={name}
                number={number}
                onDeliteContact={() => onDeliteContact(id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  list: PropTypes.array.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { list: selectors.getFilteredContact(state) };
};

const mapDispatchToProps = dispatch => ({
  onDeliteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
