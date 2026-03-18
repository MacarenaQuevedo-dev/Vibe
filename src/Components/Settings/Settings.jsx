import { useState, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { IoSettingsOutline } from "react-icons/io5"
import './Settings.css'

export default function Settings() {

    const [isOpen, setIsOpen] = useState(false)
    const { isDark, changeTheme } = useContext(ThemeContext)

    return (
        <>
            <button
                className="sidebar-user-settings"
                onClick={() => setIsOpen(true)}
                title="Ajustes"
            >
                <IoSettingsOutline />
            </button>

            {isOpen && (
                <div
                    className="settings-overlay"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="settings-panel"
                        onClick={(evento) => evento.stopPropagation()}
                    >
                        <div className="settings-header">
                            <h2 className="settings-title">Ajustes</h2>
                            <button
                                className="settings-close"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="settings-item">
                            <span className="settings-item-label">Modo oscuro</span>
                            <button
                                className={`settings-toggle ${isDark ? 'active' : ''}`}
                                onClick={changeTheme}
                            >
                                <span className="settings-toggle-circle" />
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}