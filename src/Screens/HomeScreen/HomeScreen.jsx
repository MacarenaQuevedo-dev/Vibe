import React, { useState, useEffect } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { IoMenuOutline } from "react-icons/io5"
import './HomeScreen.css'

export default function HomeScreen() {
  const fullText = "Bienvenido a Vibe !"
  const [text, setText] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [text])

  return (
    <div className="screen">
      {showSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <div className={`sidebar-container ${showSidebar ? 'open' : ''}`}>
        <ContactSidebar />
      </div>
      <div className="welcome">
        <button
          className="menu-btn"
          onClick={() => setShowSidebar(true)}
        >
          <IoMenuOutline />
        </button>
        <div className="welcome-card">
          <h2 className="welcome-title">{text}</h2>
          <p className={`welcome-subtitle ${text === fullText ? 'visible' : ''}`}>
            Seleccioná un contacto para empezar a chatear
          </p>
        </div>
      </div>
    </div>
  )
}