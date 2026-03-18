import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

const ThemeContextProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('isDark')
        return saved === 'true'
    })

    function changeTheme() {
        const newValue = !isDark
        setIsDark(newValue)
        localStorage.setItem('isDark', newValue)
    }

    const providerValues = {
        isDark,
        changeTheme
    }

    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider