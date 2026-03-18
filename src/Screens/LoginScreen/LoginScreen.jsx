import React, { useState, useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router'
import './LoginScreen.css'

export default function LoginScreen() {

    const { login } = useContext(UserContext)
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const result = login(username, password)
        if (result.success) {
            navigate('/')
        } else {
            setError(result.error)
        }
    }

    return (
        <div className="login-screen">
            <div className="login-left">
                <h1 className="login-brand">Vibe</h1>
                <h2 className="login-title">Bienvenido de nuevo</h2>
                <p className="login-subtitle">Iniciá sesión para continuar</p>

                {error && <p className="error-message">{error}</p>}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-group">
                        <label className="login-label" htmlFor="username">Usuario</label>
                        <input
                            className="login-input"
                            type="text"
                            id="username"
                            placeholder="Ingresá tu usuario"
                            value={username}
                            onChange={(evento) => setUsername(evento.target.value)}
                        />
                    </div>
                    <div className="login-group">
                        <label className="login-label" htmlFor="password">Contraseña</label>
                        <input
                            className="login-input"
                            type="password"
                            id="password"
                            placeholder="Ingresá tu contraseña"
                            value={password}
                            onChange={(evento) => setPassword(evento.target.value)}
                        />
                    </div>
                    <button className="login-btn" type="submit">Ingresar</button>
                </form>
            </div>
            <div className="login-right">
                <img src="/undraw_chatting_5u5z.svg" alt="Vibe illustration" />
            </div>
        </div>
    )
}