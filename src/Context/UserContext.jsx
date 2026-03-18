import { createContext, useState } from "react"

export const UserContext = createContext(null)

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user')
        return saved ? JSON.parse(saved) : null
    })

    function login(username, password) {
        if (!username || !password) {
            return { success: false, error: "Completá todos los campos" }
        }
        if (username.length < 4) {
            return { success: false, error: "El usuario debe tener al menos 4 caracteres" }
        }
        if (password.length < 6) {
            return { success: false, error: "La contraseña debe tener al menos 6 caracteres" }
        }

        const newUser = {
            username,
            avatar: `https://ui-avatars.com/api/?name=${username}&background=c1440e&color=fff&size=128`
        }
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        return { success: true }
    }

    function logout() {
        setUser(null)
        localStorage.removeItem('user')
    }

    function updateUsername(newUsername) {
        const updatedUser = {
            ...user,
            username: newUsername,
            avatar: `https://ui-avatars.com/api/?name=${newUsername}&background=${user.avatarColor || 'c1440e'}&color=fff&size=128`
        }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
    }

    function updateAvatarColor(newColor) {
        const updatedUser = {
            ...user,
            avatarColor: newColor,
            avatar: `https://ui-avatars.com/api/?name=${user.username}&background=${newColor}&color=fff&size=128`
        }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
    }

    const providerValues = {
        user,
        login,
        logout,
        updateUsername,
        updateAvatarColor
    }

    return (
        <UserContext.Provider value={providerValues}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider