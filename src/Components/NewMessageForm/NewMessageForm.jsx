import React, { useContext, useState } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import './NewMessageForm.css'

const NewMessageForm = ({ contact_id }) => {

  const { addNewMessage } = useContext(ContactsContext)
  const [message, setMessage] = useState("")

  function handleSubmitNewMessage(event) {
    event.preventDefault()
    addNewMessage(contact_id, message)
    setMessage("")
  }

  return (
    <form className="message-form" onSubmit={handleSubmitNewMessage}>
      <label htmlFor="nuevo_mensaje">
        Nuevo mensaje
      </label>
      <textarea
        className="message-form-input"
        placeholder='Escribí un mensaje...'
        id='nuevo_mensaje'
        name='nuevo_mensaje'
        required
        value={message}
        onChange={(evento) => setMessage(evento.target.value)}
      />
      <button className="message-form-btn" type='submit'>Enviar</button>
    </form>
  )
}

export default NewMessageForm