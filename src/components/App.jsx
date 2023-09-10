import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactList } from './ContactsList';
import { Form } from './Form';
import { FilterInput } from './FilterInput';
import { useDispatch } from 'react-redux';
// import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
export const App = () => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = (name, number) => {
  //   const existingContact = contacts.find(contact => contact.name === name);

  //   if (existingContact) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
  };
  const filteredContacts = getFilteredContacts();

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
        <FilterInput value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};
