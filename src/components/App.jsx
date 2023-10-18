import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = userContacts => {
    if (!userContacts.name) {
      return;
    }

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
      return;
    }

    setContacts([userContacts, ...contacts]);
  };


  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getContactFromFilter = () => {
 const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    return filterContacts;
  };

const handleDelete = contactId => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
   };

// localstorage
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
         <ContactForm handleAddContact={handleAddContact} />
         <h2 className={css.title}>Contacts</h2>
         {contacts.length > 0 ? (
           <>
             <Filter
               filter={filter}
               handleFilterChange={handleFilterChange}
               contacts={contacts}
             />
            <ContactsList
               contacts={getContactFromFilter()}
               handleDelete={handleDelete}
             />
          </>
        ) : (
           <h3 className={css.titleNotification}>
             There are no any contacts here
          </h3>
        )}
       </div>
    );
  }
