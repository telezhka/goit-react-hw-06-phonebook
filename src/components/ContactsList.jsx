import React from 'react';
import css from '../css/ContactsList.module.css';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact =>
      contact.contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
};

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts, filter);
  const visible = getVisibleContacts(contacts, filter);

  return (
    <ul>
      {visible.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <span className={css.listText}>
            {contact.contact.name}: {contact.contact.number}
          </span>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={css.listButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
