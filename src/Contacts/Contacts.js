import React from 'react';
import './Contacts.css';

const Delete = ({index, handleDeleteContact}) => {
    return  <button onClick={() => handleDeleteContact(index)}> delete </button>
}

const Contacts = ({handleDeleteContact, contacts}) => {
    return (
        <div className="contacts-wrapper">
            {
                contacts.length ?
                    <ul>
                        {
                        contacts.map((contact, index) => {
                            return (
                                <li key={ contact.id.toString() }>
                                    <div className="contact-brief">
                                        <p className="contact-name">
                                            <strong> 
                                                { `${contact.first_name} ${contact.last_name}` } 
                                            </strong>
                                        </p>
                                        <p className="contact-phone">
                                            { contact.phone }
                                        </p> 
                                        <Delete 
                                            index={index}
                                            handleDeleteContact={handleDeleteContact}
                                       />
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                    : <p> There are no contacts in book </p>
            }
        </div>
    );
}
export default Contacts;