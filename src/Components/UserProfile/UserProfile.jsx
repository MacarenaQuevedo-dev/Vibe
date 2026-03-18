import { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import { IoIosArrowRoundBack } from "react-icons/io"
import './UserProfile.css'

export default function UserProfile() {

    const [isOpen, setIsOpen] = useState(false)
    const [newUsername, setNewUsername] = useState("")
    const [isEditingName, setIsEditingName] = useState(false)
    const [isEditingColor, setIsEditingColor] = useState(false)
    const { user, updateUsername, updateAvatarColor } = useContext(UserContext)
    const [error, setError] = useState("")

    return (
        <>
            <div
                className="user-profile-card"
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={user.avatar}
                    alt={user.username}
                    className="sidebar-user-avatar"
                />
                <span className="sidebar-user-name">
                    {user.username}
                </span>
            </div>

            {isOpen && (
                <div
                    className="user-profile-overlay"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="user-profile-panel"
                        onClick={(evento) => evento.stopPropagation()}
                    >
                        <div className="user-profile-header">
                            {(isEditingName || isEditingColor) && (
                                <button
                                    className="user-profile-back"
                                    onClick={() => {
                                        setIsEditingName(false)
                                        setIsEditingColor(false)
                                    }}
                                >
                                    <IoIosArrowRoundBack />
                                </button>
                            )}
                            <button
                                className="user-profile-close"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <img
                            src={user.avatar}
                            alt={user.username}
                            className="user-profile-avatar"
                        />

                        <h2 className="user-profile-name">
                            {user.username}
                        </h2>

                        {isEditingName && (
                            <div className="user-profile-edit">
                                {error && <p className="error-message">{error}</p>}
                                <input
                                    className="user-profile-input"
                                    type="text"
                                    placeholder="Nuevo nombre de usuario"
                                    value={newUsername}
                                    onChange={(evento) => setNewUsername(evento.target.value)}
                                />
                                <div className="user-profile-edit-actions">
                                    <button
                                        className="user-profile-save"
                                        onClick={() => {
                                            if (newUsername.trim().length < 4) {
                                                setError("El usuario debe tener al menos 4 caracteres")
                                                return
                                            }
                                            updateUsername(newUsername)
                                            setIsEditingName(false)
                                            setNewUsername("")
                                            setError("")
                                        }}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        className="user-profile-cancel"
                                        onClick={() => {
                                            setIsEditingName(false)
                                            setNewUsername("")
                                        }}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        )}

                        {isEditingColor && (
                            <div className="user-profile-colors">
                                <div className="user-profile-colors-list">
                                    {['c1440e', '2d6a4f', '1d3557', '6d4c41', '4a4e69', 'e76f51', '457b9d', '6d6875', 'b5838d', '2b9348'].map(color => (
                                        <button
                                            key={color}
                                            className="user-profile-color-btn"
                                            style={{ backgroundColor: `#${color}` }}
                                            onClick={() => {
                                                updateAvatarColor(color)
                                                setIsEditingColor(false)
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isEditingName && !isEditingColor && (
                            <div className="user-profile-actions">
                                <button
                                    className="user-profile-action-btn"
                                    onClick={() => setIsEditingName(true)}
                                >
                                    Cambiar nombre
                                </button>
                                <button
                                    className="user-profile-action-btn"
                                    onClick={() => setIsEditingColor(true)}
                                >
                                    Cambiar color
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    )
}