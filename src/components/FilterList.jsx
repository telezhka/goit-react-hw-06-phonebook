import React from 'react';
import css from '../css/ContactsList.module.css';
import PropTypes from 'prop-types';
export const FilterList = ({ contacts, onDeleteContact }) => {
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
FilterList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
