import propTypes from 'prop-types';
import css from "./ContactForm.module.css";
import { Component } from "react";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        this.props.handleSubmit(this.state);
        form.reset();
    }

    render() {
        const { name, number } = this.state;
        return (
          <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.labelForm}>Name</label>
            <input
              className={css.nameForm}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <button type="submit" className={css.formBtn}>
              Add contact
            </button>
          </form>
        );
    }
}

ContactForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
}