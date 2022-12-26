import propTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, handleDelete }) => {
    return (
        <div className={css.contactContainer}>
            <ul className={css.contactList}>
                {contacts.map((contact, id) => (
                  <li key={id} className={css.contactsItem}>
                    {contact.name}: {contact.number}
                    <button className={css.deleteBtn} type="button" onClick={() => handleDelete(contact.id)}>Delete</button>
                  </li>
                ))}
            </ul>
        </div>
    )
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};