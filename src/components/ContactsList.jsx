import React from 'react';
import css from '../css/ContactsList.module.css';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
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
