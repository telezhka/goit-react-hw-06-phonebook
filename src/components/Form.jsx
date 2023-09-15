import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../css/Form.module.css';
import { addContact } from 'redux/contactsSlice';
import { isContactNameUnique } from 'redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const isUnique = useSelector(state => isContactNameUnique(state, name));
  const contact = {
    name,
    number,
  };
  const handleChangeName = event => {
    setName(event.target.value);
    console.log(name);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
    console.log(number);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !number) {
      alert('Please enter name and number');
      return;
    }
    if (!isUnique) {
      alert('This contact already exists');
      return;
    }
    console.log(contact);
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          className={css.input}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          className={css.input}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
// Form.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };
