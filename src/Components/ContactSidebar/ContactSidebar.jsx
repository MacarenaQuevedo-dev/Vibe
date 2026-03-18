import React, { useContext, useState } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link, useParams } from 'react-router'
import './ContactSidebar.css'
import { IoSearch } from "react-icons/io5"
import { UserContext } from '../../Context/UserContext'
import { IoLogOutOutline } from "react-icons/io5"
import UserProfile from '../UserProfile/UserProfile'

import Settings from '../Settings/Settings'


export default function ContactSidebar() {

    const { contacts } = useContext(ContactsContext)
    const [search, setSearch] = useState("")
    const { contact_id } = useParams()
    const { user, logout, updateUsername, updateAvatarColor } = useContext(UserContext)

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2 className="sidebar-brand">Vibe</h2>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-box">
                    <span className="sidebar-search-icon"><IoSearch/></span>
                    <input
                        className="sidebar-search-input"
                        type="text"
                        placeholder="Buscar un chat o iniciar uno nuevo..."
                        value={search}
                        onChange={(evento) => setSearch(evento.target.value)}
                    />
                </div>
            </div>
            <div className="sidebar-contacts">
                {filteredContacts.length > 0
                    ? filteredContacts.map(contact => (
                        <Link 
                            to={`/contact/${contact.id}`} 
                            key={contact.id} 
                            className={`contact-card ${Number(contact.id) === Number(contact_id) ? 'active' : ''}`}
                        >
                            <img
                                src={contact.profile_picture}
                                alt={contact.name}
                                className="contact-avatar"
                            />
                            <div className="contact-info">
                                <h3 className="contact-name">{contact.name}</h3>
                                <span className="contact-time">{contact.last_time_connection}</span>
                            </div>
                        </Link>
                    ))
                    : <p className="no-results">No se encontró ningún chat, contacto ni mensaje. </p>
                }
            </div>

            <div className="sidebar-user">
                <UserProfile />
                <Settings />
                <button
                    className="sidebar-user-logout"
                    onClick={logout}
                    title="Cerrar sesión"
                >
                    <IoLogOutOutline />
                </button>
            </div>
        </div>
    )
}