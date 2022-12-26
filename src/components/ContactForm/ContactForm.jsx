import propTypes from 'prop-types';
import css from "./ContactForm.module.css";
import { useState } from "react";

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };
    
  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    handleSubmit({ name: name, number: number });
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.labelForm}>Name</label>
      <input
        className={css.nameForm}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeName}
      />
      <label className={css.labelForm}>Number</label>
      <input
        className={css.numberForm}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
      />
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
}  

ContactForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
}