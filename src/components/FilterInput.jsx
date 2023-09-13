import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
export const FilterInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const onChange = event => {
    setValue(event.target.value);
    dispatch(setFilter(event.target.value));
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
