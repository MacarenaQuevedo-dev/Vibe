import React, { useContext, useState } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactsContext } from '../../Context/ContactsContext'
import { useParams, useNavigate } from 'react-router'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '../../Components/Messages/Messages'
import './ContactScreen.css'
import { IoCall, IoSearch, IoArrowBack } from "react-icons/io5"
import ChatDropdown from '../../Components/ChatDropdown/ChatDropdown'
import ContactDetails from '../../Components/ContactDetails/ContactDetails'

export default function ContactScreen() {

    const { contacts, clearMessages } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))
    const navigate = useNavigate()
    const [isSearching, setIsSearching] = useState(false)
    const [searchMessage, setSearchMessage] = useState("")
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className="screen">
            {showSidebar && (
                <div
                    className="chat-sidebar-overlay"
                    onClick={() => setShowSidebar(false)}
                />
            )}
            <div className={`chat-sidebar-container ${showSidebar ? 'open' : ''}`}>
                <ContactSidebar />
            </div>
            {
                !contact_selected
                    ? (
                        <div>
                            <h1>El contacto seleccionado no existe</h1>
                        </div>
                    )
                    : (
                        <div className="chat-container">
                            <div className="chat-header">
                                <button
                                    className="chat-back-btn"
                                    onClick={() => setShowSidebar(true)}
                                >
                                    <IoArrowBack />
                                </button>
                                <ContactDetails contact_selected={contact_selected} />
                                <div className="chat-header-actions">
                                    <button className="chat-header-btn">
                                        <IoCall />
                                    </button>
                                    <button
                                        className="chat-header-btn"
                                        onClick={() => {
                                            setIsSearching(!isSearching)
                                            setSearchMessage("")
                                        }}
                                    >
                                        <IoSearch />
                                    </button>
                                    <ChatDropdown
                                        contact_id={contact_id}
                                        clearMessages={clearMessages}
                                        navigate={navigate}
                                    />
                                </div>
                            </div>
                            {isSearching && (
                                <div className="chat-search">
                                    <input
                                        className="chat-search-input"
                                        type="text"
                                        placeholder="Buscar mensaje..."
                                        value={searchMessage}
                                        onChange={(evento) => setSearchMessage(evento.target.value)}
                                        autoFocus
                                    />
                                </div>
                            )}
                            <div className="chat-messages">
                                <Messages
                                    contact_selected={contact_selected}
                                    searchMessage={searchMessage}
                                />
                            </div>
                            <div className="chat-form">
                                <NewMessageForm contact_id={contact_selected.id} />
                            </div>
                        </div>
                    )
            }
        </div>
    );
}