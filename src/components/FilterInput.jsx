// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
export const FilterInput = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // console.log(contacts);
  let filteredContacts = [];
  const [value, setValue] = useState('');
  const onChange = event => {
    setValue(event.target.value);
    filteredContacts = contacts.filter(contact =>
      contact.contact.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log('filteredContacts: ', filteredContacts);
    dispatch(filterContact(filteredContacts));
  };
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts by name"
      style={{ marginBottom: '10px', padding: '5px' }}
    />
  );
};
// FilterInput.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
