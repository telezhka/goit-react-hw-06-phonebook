import React, { useState } from 'react';
import { ContactList } from './ContactsList';
import { Form } from './Form';
import { FilterInput } from './FilterInput';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
export const App = () => {
  const [filter, setFilter] = useState('');

  // const dispatch = useDispatch();
  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <FilterInput
          value={filter}
          onChange={handleFilterChange}
          // onDeleteContact={handleDeleteContact}
        />
        <ContactList />
      </div>
    </div>
  );
};
