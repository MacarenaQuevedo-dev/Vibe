
import { createContext, useState } from "react";
import { getContacts } from "../Services/ContactService";

export const ContactsContext = createContext(
    {
        contacts: [],
        favorite_name: '',
        addNewMessage: (contact_id, new_message = '') => { },
        clearMessages: (contact_id) => { }
    }
)

const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)

    function addNewMessage(contact_id, new_message) {
        setContactsState(
            (currentContactState) => {
                 return [...currentContactState].map(
                    (contact) => {
                        if (Number(contact.id) === Number(contact_id)) {
                            contact.messages.push(
                                {
                                     
                                    id: contact.messages.length + 1,
                                    text: new_message,
                                    send_by_me: true, 
                                    created_at: new Date().toISOString(),
                                    is_read: false
                                
                                }
                            )
                        }
                        return contact
                    } 
                
            )}
        )
    }

    function clearMessages(contact_id) {
        setContactsState(
            (currentContactState) => {
                return [...currentContactState].map(
                    (contact) => {
                        if (Number(contact.id) === Number(contact_id)) {
                            return { ...contact, messages: [] }
                        }
                        return contact
                    }
                )
            }
        )
    }

const provider_values = {
    contacts: contactsState,
    favorite_name: 'pepe',
    addNewMessage,
    clearMessages
}

return (
    <ContactsContext.Provider
        value={provider_values}
    >
        {children}
    </ContactsContext.Provider>
)
}

export default ContactsContextProvider