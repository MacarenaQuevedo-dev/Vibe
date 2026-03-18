import React, { useState } from 'react'
import './ContactDetails.css'

export default function ContactDetails({ contact_selected }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="chat-header-info" 
                onClick={() => setIsOpen(true)}
            >
                <img src={contact_selected.profile_picture} className="chat-header-avatar" />
                <h2 className="chat-header-name">{contact_selected.name}</h2>
            </div>

            {isOpen && (
                <div className="contact-details-overlay" 
                    onClick={() => setIsOpen(false)}
                >
                    <div className="contact-details-panel" 
                        onClick={(evento) => evento.stopPropagation()}>
                        <button 
                            className="contact-details-close" 
                            onClick={() => setIsOpen(false)}>
                                ✕
                        </button>
                        <img src={contact_selected.profile_picture} className="contact-details-avatar" />
                        <h2 className="contact-details-name">{contact_selected.name}</h2>
                        <p className="contact-details-time">Última conexión: {contact_selected.last_time_connection}</p>
                        <div className="contact-details-stat">
                            <span className="contact-details-stat-number">{contact_selected.messages.length}</span>
                            <span className="contact-details-stat-label">mensajes</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}