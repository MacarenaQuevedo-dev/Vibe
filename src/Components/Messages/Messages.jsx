import React from 'react'
import './Messages.css'

const Messages = ({ contact_selected, searchMessage }) => {

    const filteredMessages = contact_selected.messages.filter(message =>
        message.text.toLowerCase().includes(searchMessage.toLowerCase())
    )

    return (
        <div className="messages-list">
            {
                filteredMessages.map(message => (
                    <div
                        key={message.id}
                        className={`message ${message.send_by_me ? 'message--mine' : 'message--theirs'}`}
                    >
                        <p className="message-text">{message.text}</p>
                        <span className="message-time">
                            {new Date(message.created_at).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                    </div>
                ))}
        </div>
    )
}

export default Messages
