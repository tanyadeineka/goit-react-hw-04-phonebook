import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("savedContacts")) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = ({ name, number }) => {
    if (contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts.`);
    } else {
      let contact = { id: nanoid(), name: name, number: number };
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const getFilteredContacts = () => {
    const filteredContactList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
    return filteredContactList;
  };

  const handleDelete = (id) => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList contacts={getFilteredContacts()} handleDelete={handleDelete} />
      </div>
    );
}