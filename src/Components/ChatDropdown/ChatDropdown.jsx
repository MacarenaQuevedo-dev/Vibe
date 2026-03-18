import React, { useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl"
import './ChatDropdown.css'

export default function ChatDropdown({ contact_id, clearMessages, navigate }) {

    const [isOpen, setIsOpen] = useState(false)

    function handleClearChat() {
        if (confirm('¿Querés limpiar el chat?')) {
            clearMessages(contact_id)
            setIsOpen(false)
        }
    }

    function handleCloseChat() {
        setIsOpen(false)
        navigate('/')
    }

    return (
        <div className="dropdown">
            <button className="chat-header-btn" onClick={() => setIsOpen(!isOpen)}>
                <SlOptionsVertical />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={handleClearChat}>
                        Limpiar chat
                    </button>
                    <button className="dropdown-item" onClick={handleCloseChat}>
                        Cerrar chat
                    </button>
                </div>
            )}
        </div>
    )
}