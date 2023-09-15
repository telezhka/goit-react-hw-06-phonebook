export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const isContactNameUnique = (state, name) => {
  const contacts = state.contacts;
  return !contacts.some(contact => contact.contact.name === name);
};
