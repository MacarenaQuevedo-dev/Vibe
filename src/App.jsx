import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Context/ContactsContext'
import UserContextProvider from './Context/UserContext'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ThemeContextProvider  from './Context/ThemeContext'
import { ThemeContext } from './Context/ThemeContext'
import './App.css'

function AppContent() {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className={isDark ? 'dark' : ''}>
      <Routes>
        <Route 
          path='/login' 
          element={<LoginScreen />} 
        />
        <Route 
          path='/' 
          element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} 
        />
        <Route 
          path='/contact/:contact_id' 
          element={<ProtectedRoute><ContactScreen /></ProtectedRoute>} 
        />
        <Route 
          path='*' 
          element={<ErrorNotFoundScreen />} 
        />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <UserContextProvider>
          <ContactsContextProvider>
            <AppContent />
          </ContactsContextProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App